<script setup>
import router from "@/router";
import VueMarkdown from 'vue-markdown-render'
import { getTuerchen } from "@/utils/getTuerchen";

const tuerchen = getTuerchen();

// get current router id
const id = parseInt(router.currentRoute.value.params.id);
const day = tuerchen[id - 1], content = day.content;
const priorDays = tuerchen.slice(0, id - 1).map(d => d.content);
</script>
<template>
  <div class="p-4">
    <vue-markdown class="markdown" :source="content"/>
  </div>
</template>
<style>
.markdown p {
  @apply mb-4 leading-relaxed tracking-wide  text-lg  ;
}
</style>