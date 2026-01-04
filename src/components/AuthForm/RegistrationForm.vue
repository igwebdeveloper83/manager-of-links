<script setup lang="ts">
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    const formData = ref({
        email: '',
        password: '',
        firstname:'',
    });
   
</script>

<template>
    <form>
        <div class="mb-3">
            <InputText name="email" type="email" v-model="formData.email" placeholder="Email" class="w-full" />
        </div>
        <div class="mb-3">
            <InputText name="password" type="password" v-model="formData.password" placeholder="Password" class="w-full" />
        </div>
        <div class="mb-3">
            <InputText name="firstname" type="text" v-model="formData.firstname" placeholder=" Add Firstname" class="w-full" />
        </div>
        <div class="grid grid-cols-2 gap-3">
            <Button type="submit" label="Registrieren" class="w-full" />
            <Button type="submit" label="Github" icon="pi pi-github" class="w-full" severity="contrast" />
        </div>
    </form>
</template>

<style scoped></style>