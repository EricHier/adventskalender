<script setup>
import data from "@/assets/data";
import router from "@/router";
import VueMarkdown from 'vue-markdown-render'

// get current router id
const id = parseInt(router.currentRoute.value.params.id);
const day = data[id - 1], content = day.content;
const priorDays = data.slice(0, id - 1).map(d => d.content);
</script>
<template>
  <div class="p-4">
      <vue-markdown class="markdown" :source="content" />
  </div>
</template>
<style>
.markdown p {
  @apply mb-4 leading-relaxed tracking-wide	text-lg	;
}
</style>