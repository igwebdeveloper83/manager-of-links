<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from './stores/counter';
import Toast from 'primevue/toast'
import Header from './components/Header.vue'

const authStore = useUserStore()

onMounted( async() => {
  await authStore.getUser()
})

</script>

<template>
  <Header v-if="authStore.user"/>
  <Toast position="top-right" />
  <router-view />
</template>