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
    <h1 class="text-2xl text-center font-semibold mt-6">Paula's Adventskalender ❤️</h1>

    <div class="p-4 md:p-6">
      <RouterView v-if="$route.query.t"/>

      <div v-else>
        Kein Passwort angegeben
      </div>
    </div>

    <Snowfall/>
  </div>

</template>