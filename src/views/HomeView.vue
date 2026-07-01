<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const hash = window.location.hash

  if (!hash) return

   const accessToken = new URLSearchParams(hash.slice(1)).get('access_token')

  if (accessToken) {
   history.replaceState(null, '', location.pathname)
  }
})
</script>

<template>
  <h1>Links</h1>
</template>