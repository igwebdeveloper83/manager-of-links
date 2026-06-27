<script setup lang="ts">
    import NewPasswordForm from '@/components/AuthForm/NewPasswordForm.vue';
import ResetPasswordForm from '@/components/AuthForm/ResetPasswordForm.vue';
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="p-6 bg-white rounded-lg shadow-lg w-full md:w-110">
            <NewPasswordForm />
        </div>
    </div>
</template>

<style scoped></style>