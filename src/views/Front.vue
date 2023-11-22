<template>
  <div class="relative">
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 bg-no-repeat bg-cover bg-center" :style="{'background-image': `url('/background.jpg')}')`}">
      <tuerchen v-for="tuer in tuerchen" :tuer="tuer" :key="tuer.id"/>
    </div>
  </div>
</template>
<script>
import tuerchen from "@/assets/data";
import Tuerchen from "@/components/Tuerchen.vue";

function getPreparedTuerchen() {
  let date = new Date();

  let shuffledTuerchen = tuerchen.map((data, id) => {
    id++;
    return {
      ...data,
      id,
      before: date.getDate() < id,
      today: import.meta.env.DEV || date.getDate() === id && (date.getMonth() === 11 || date.getFullYear() > 2023),
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
  components: { Tuerchen },
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