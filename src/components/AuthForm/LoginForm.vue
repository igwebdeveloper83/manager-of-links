<script setup lang="ts">
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    const formData = ref({
        email: '',
        password: ''
    });

    const emits = defineEmits(['resetPassword']);
   
</script>

<template>
    <form>
        <div class="mb-3">
            <InputText name="email" type="email" v-model="formData.email" placeholder="Email" class="w-full" />
        </div>
        <div class="mb-3">
            <InputText name="password" type="password" v-model="formData.password" placeholder="Password" class="w-full" />
        </div>
        <span class="cursor-pointer block mb-3" @click="emits('resetPassword')">Passwort vergessen?</span>
        <div class="grid grid-cols-2 gap-3">
            <Button type="submit" label="Anmelden" class="w-full" />
            <Button type="submit" label="Github" icon="pi pi-github" class="w-full" severity="contrast" />
        </div>
    </form>
</template>

<style scoped></style>