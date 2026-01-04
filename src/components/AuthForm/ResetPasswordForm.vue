<script setup lang="ts">
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    const formData = ref({
        email: '',
    });
   
</script>

<template>
    <form>
        <div class="mb-3">
            <InputText name="email" type="text" v-model="formData.email" placeholder="Email" class="w-full" />
        </div>
        <div class="grid">
            <Button type="submit" label="Reset Password" class="w-full" />
        </div>
    </form>
</template>

<style scoped></style>