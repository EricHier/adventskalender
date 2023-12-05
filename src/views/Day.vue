<script setup>
import router from "@/router";
import VueMarkdown from 'vue-markdown-render'
import { getTuerchen } from "@/utils/getTuerchen";

const tuerchen = getTuerchen();
const accurateDate = new Date((await fetch("/", { cache: "no-store" })).headers.get("Date")).getDate();
const id = parseInt(router.currentRoute.value.params.id);

if (accurateDate < id) {
  router.push({ path: `/`, query: { t: router.currentRoute.value.query.t } });
}

const day = tuerchen[id - 1], content = day.content;
</script>
<template>
  <div v-if="accurateDate >= id">
    <div class="mb-4 text-center text-lg font-mono">
    Tag {{ id }}:
    <p class="text-base mt-2">{{ day.description }}</p>
  </div>

  <!-- links to previous day, home and next day -->
  <div class="hidden flex justify-center gap-4 mb-8 text-sm font-bold">
    <router-link v-if="id > 1" :to="`/d/${id - 1}?t=${$route.query.t}`">Vorheriger Tag</router-link>
    <router-link :to="`/?t=${$route.query.t}`">Zurück zur Übersicht</router-link>
    <router-link v-if="id < 24" :to="`/d/${id + 1}?t=${$route.query.t}`">Nächster Tag
    </router-link>
  </div>

  <div class="p-4">
    <vue-markdown class="markdown text-justify" :source="content.replaceAll('\n', '\n\n')"/>
  </div>
  </div>
</template>
<style>
.markdown p {
  @apply mb-4 leading-relaxed tracking-wide  text-lg  ;
}
</style>