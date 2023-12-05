<template>
  <div class="relative">
    <div v-if="tuerchen" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 bg-no-repeat bg-cover bg-center" :style="{'background-image': `url('/background.jpg')}')`}">
      <tuerchen v-for="tuer in tuerchen" :tuer="tuer" :key="tuer.id"/>
    </div>
  </div>
</template>
<script>
import Tuerchen from "@/components/Tuerchen.vue";
import { getTuerchen } from "@/utils/getTuerchen";

const tuerchen = getTuerchen();

async function getPreparedTuerchen() {
  const date = new Date((await fetch("/", {cache: "no-store"})).headers.get("Date"));

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
      tuerchen: null
    }
  },
  async created() {

    this.tuerchen = await getPreparedTuerchen();

    // calculate milliseconds until midnight
    let midnight = new Date();
    midnight.setHours(24, 0, 0, 0)
    let untilMidnight =  midnight.getTime() - new Date().getTime();
    const self = this;

    setTimeout(async () => {
      self.tuerchen = await getPreparedTuerchen();

      // refresh at every midnight
      setInterval(async () => {
        self.tuerchen = await getPreparedTuerchen();
      }, 1000 * 60 * 60 * 24);
    }, untilMidnight)
  }
}
</script>