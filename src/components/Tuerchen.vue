<template>
  <div class="relative box-size mx-auto" :class="{'cursor-not-allowed' : !(tuer.before || tuer.today) }">

    <!-- door -->
    <div class="box door z-20 border border-white" :style="{backgroundColor: backgroundColor}"
         :class=" {'open':opened}"
         @click="opened = (tuer.before || tuer.today) && !opened">
      <p class="text-4xl lg:text-7xl select-none font-extrabold text-white">{{ tuer.id }}</p>
    </div>

    <!-- behind -->
    <div class="box text-white shadow-inner border border-white" :style="{backgroundColor: darkBackgroundColor}">
      <h2 class="text-medium sm:text-base leading-tight select-none">{{ tuer.description }}</h2>
      <router-link :to="`/d/${tuer.id}?t=${$route.query.t}`"
                   class="monospace text-xs sm:text-sm md:text-base font-bold bg-white p-1 md:px-3 text-black rounded-md">
        Öffnen
      </router-link>
    </div>

  </div>
</template>
<script>
import { shadeColor, randomBackgroundColor } from "@/utils/color";


export default {
  props: ["tuer"],
  data() {
    return {
      opened: false,
    }
  },
  setup() {
    const backgroundColor = randomBackgroundColor();
    const darkBackgroundColor = shadeColor(backgroundColor, -50)

    return {
      backgroundColor,
      darkBackgroundColor
    }
  }
}
</script>
<style lang="scss" scoped>
.box-size {
  @apply w-full p-1 aspect-square;
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