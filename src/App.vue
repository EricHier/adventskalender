<script setup>
import { RouterView } from 'vue-router'
import Snowfall from "@/components/Snowfall.vue";
</script>
<template>
  <div class="max-w-4xl mx-auto text-white" v-if="$route.query.t === 'l2354blk2j345blkj345b'">
    <h1 class="text-2xl text-center font-semibold mt-6">Paula's Adventskalender ❤️</h1>

    <div class="p-4 md:p-6" >
          <RouterView/>
    </div>

    <Snowfall />
  </div>
</template>