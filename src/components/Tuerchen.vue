<template>
  <div class="relative box-size mx-auto" :class="{'cursor-not-allowed' : !tuer.today }">

    <!-- door -->
    <div class="box door z-20 border border-white" :style="{backgroundColor: randomBackgroundColor}"
         :class=" {'open':opened}"
         @click="opened = tuer.today && !opened">
      <p class="text-4xl lg:text-7xl select-none font-extrabold text-white">{{ tuer.id }}</p>
    </div>

    <!-- behind -->
    <div class="box text-white shadow-inner border border-white" style="background-color: #3d1c23;">
      <h2 class="-mb-4 text-xs sm:text-base md:text-lg leading-tight select-none">{{ tuer.description }}</h2>
      <router-link :to="`/d/${tuer.id}`"
                   class="monospace text-xs sm:text-sm md:text-base font-bold bg-white p-1 md:px-3 text-black rounded-md">
        Öffnen
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
  props: ["tuer"],
  data() {
    return {
      opened: false
    }
  },
  computed: {
    randomBackgroundColor() {
      const random = Math.floor(Math.random() * 6);
      switch (random) {
        case 0:
          return "#294F38";
        case 1:
          return "#c5695c";
        case 2:
          return "#84A07C";
        case 3:
          return "#733646";
        case 4:
          return "#974c51";
        case 5:
          return "#a5323f";
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.box-size {
  @apply h-32 lg:h-48 w-full p-1;
}

.box {
  @apply box-size absolute top-0 left-0 flex flex-col justify-evenly items-center text-center overflow-hidden;
}

.door {
  @apply transition-all duration-1000;
  transform-origin: left center;
}

.door.open {
  transform: perspective(1200px) rotateY(-110deg);
}
</style>