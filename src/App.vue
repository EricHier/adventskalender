<script>
import { RouterView } from 'vue-router'
import Snowfall from "@/components/Schneefall.vue";

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
    <router-link :to="`/?t=${$route.query.t}`" class="block w-full z-40 bg-[#733646] shadow-2xl py-6">
      <h1 class="text-xl text-center font-semibold">Paula's Adventskalender ❤️</h1>
    </router-link>

    <div class="p-4 md:p-6">

      <Suspense v-if="$route.query.t">
        <RouterView />
      </Suspense>

      <div v-else>
        Kein Passwort angegeben
      </div>
    </div>

    <Snowfall/>
  </div>

</template>