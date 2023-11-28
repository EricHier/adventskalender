<template>
  <div>
    <textarea v-model="decrypted" class="w-full h-64 p-4 md:p-6 bg-gray-800 text-white"></textarea>
    <button class="bg-gray-800 text-white p-4 md:p-6 w-full" @click="encrypt">Verschlüsseln</button>
    <p class="text-white">{{ encrypted }}</p>
  </div>
</template>>
<script>
import { encrypt } from "@/utils/getTuerchen";

export default {
  name: "EncryptTool",
  data() {
    return { decrypted: "", encrypted: "" };
  },
  methods: {
    encrypt() {
      this.encrypted = encrypt(this.decrypted);
    }
  }
}
</script>
