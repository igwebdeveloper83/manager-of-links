<script setup lang="ts">
    import Button from 'primevue/button';
    import Avatar from 'primevue/avatar';
    import Menubar from 'primevue/menubar';
    import { computed } from 'vue';
    import { useUserStore } from '@/stores/counter';
    import { useAuth } from '@/composables/useAuth';
    import { useRouter } from 'vue-router';
    import { useToastNotifications } from '../composables/useToastNotifications'

    const { showToast } = useToastNotifications()
    const router = useRouter()

    const authStore = useUserStore()

    const { signOut, errorMessage } = useAuth()

    const emailFirstLetter = computed(() => {
      const letter = authStore.user?.email?.[0]
      return letter ? letter.toUpperCase() : ''
    })

    const SignOutUser = async () => {
      try {
        await signOut()
        authStore.resetUser()
        await router.replace('/auth')
      } catch (error) {
        showToast('error', 'error by logout', errorMessage.value)
      }
    }


</script>

<template>
    <div class="mb-5">
        <Menubar>
            <template #start>
                <div class="flex items-center gap-2">
                    <span class="font-bold">Link Manager</span>
                    <div class="flex items-center gap-2">
                        <Button icon="pi pi-link" rounded />
                        <Button icon="pi pi-folder" rounded />
                    </div>
                </div>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <Avatar :label="emailFirstLetter" size="large" shape="circle" />
                    <Button icon="pi pi-sign-out" rounded severity="secondary" @click="SignOutUser" />
                </div>
            </template>
        </Menubar>
    </div>
</template>