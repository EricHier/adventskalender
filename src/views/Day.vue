<script setup>
import { useDocument } from "vuefire";
import { doc } from "firebase/firestore";
import { db } from "@/plugins/firebase";
import router from "@/router";

// get current router id
const id = router.currentRoute.value.params.id;
const day = useDocument(doc(db, "days", id));
</script>

<template>
  <div class="text-xl ">{{ day }}</div>

</template>
