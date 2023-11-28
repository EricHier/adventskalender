<script>
import { RouterView } from 'vue-router'
import Snowfall from "@/components/Snowfall.vue";

export default {
  components: { Snowfall, RouterView },
  data() {
    return {
      password: ""
    }
  },
}

</script>
<template>
  <div class="max-w-4xl mx-auto text-white">
    <div class="w-full z-40 bg-[#733646] shadow-2xl py-6">
      <h1 class="text-xl text-center font-semibold">Paula's Adventskalender ❤️</h1>
    </div>

    <div class="p-4 md:p-6">
      <RouterView v-if="$route.query.t"/>

      <div v-else>
        Kein Passwort angegeben
      </div>
    </div>

    <Snowfall/>
  </div>

</template>