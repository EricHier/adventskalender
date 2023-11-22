<template>
  <canvas ref="canvas" class="fixed top-0 left-0 z-20 pointer-events-none"/>
</template>
<script>
import * as THREE from 'three/src/Three';

export default {
  mounted() {
    const element = document.documentElement;

    let WIDTH = element.scrollWidth,
        HEIGHT = element.scrollHeight,
        PARTICLE_COUNT = 10000;

    let camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.5, 1000);
    let scene = new THREE.Scene();
    let snowflakeTexture = new THREE.TextureLoader().load('/img.png');

    camera.position.z = 300;

    let renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0x000000, 0);

    let frame = 0,
        particles = [],
        geometry = new THREE.Geometry();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let particle = {
        position: new THREE.Vector3(Math.random() * 600 - 400, Math.random() * 300 - 150, Math.random() * 500 - 250),
        velocity: new THREE.Vector3(Math.random() - 0.5, Math.random(), 0)
      };
      particles.push(particle);
      geometry.vertices.push(particle.position);
    }

    let particleMaterial = new THREE.PointsMaterial({
      color: '#FFF',
      map: snowflakeTexture,
      size: 1.5,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    let particleSystem = new THREE.Points(geometry, particleMaterial);

    particleSystem.sortParticles = true;
    scene.add(particleSystem);

    function render() {
      requestAnimationFrame(render);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (geometry.vertices[i].y < -200)
          geometry.vertices[i].y = 200;

        geometry.vertices[i].y -= particles[i].velocity.y;
        geometry.vertices[i].x += particles[i].velocity.x / 7;
      }

      geometry.verticesNeedUpdate = true;
      renderer.render(scene, camera);

      frame++;
    }

    render();
  }
}
</script>