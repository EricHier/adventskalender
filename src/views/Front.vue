<template>
  <div class="relative max-w-4xl mx-auto">
    <h1 class="text-2xl text-center font-semibold mt-6">Paula's Adventskalender ❤️</h1>
    <div class="p-4 md:p-6 grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 bg-no-repeat bg-cover bg-center" :style="{'background-image': `url('/background.jpg')}')`}" id="container">
      <tuerchen v-for="tuer in tuerchen" :tuer="tuer" :key="tuer.id"/>
    </div>
    <Snowfall />
  </div>
</template>
<script>
import tuerchen from "@/assets/data";
import Tuerchen from "@/components/Tuerchen.vue";
import Snowfall from "@/components/Snowfall.vue";

function getPreparedTuerchen() {
  let date = new Date();

  let shuffledTuerchen = tuerchen.map((data, id) => {
    id++;
    return {
      ...data,
      id,
      before: date.getDate() < id,
      today: true || date.getDate() === id && date.getMonth() === 11,
      after: date.getDate() > id
    };
  }).shuffle();

  let id = shuffledTuerchen.indexOf(shuffledTuerchen.find(t => t.today));

  // empty space
  if(id % 3 === 2 || id % 4 === 3)
    shuffledTuerchen.unshift(shuffledTuerchen.pop());

  return shuffledTuerchen;
}

export default {
  components: { Tuerchen, Snowfall },
  data() {
    return {
      tuerchen: getPreparedTuerchen()
    }
  },
  created() {

    // calculate milliseconds until midnight
    let midnight = new Date();
    midnight.setHours(24, 0, 0, 0)
    let untilMidnight =  midnight.getTime() - new Date().getTime();
    const self = this;

    setTimeout(() => {
      self.tuerchen = getPreparedTuerchen();

      // refresh at every midnight
      setInterval(() => {
        self.tuerchen = getPreparedTuerchen();
      }, 1000 * 60 * 60 * 24);
    }, untilMidnight)
  }
}
</script>