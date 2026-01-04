<script setup lang="ts">
    import { ref } from 'vue';
    import { z } from 'zod';
    import { zodResolver } from '@primevue/forms/resolvers/zod';
    import { Form } from '@primevue/forms';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import Message from 'primevue/message';


    const formData = ref({
        email: '',
        password: ''
    });

    const emits = defineEmits(['resetPassword']);

    const rules = z.object({
        email: z.email({message: 'invalid email'}),
        password: z.string().min(6, {message: 'must be at least 6 characters'})
    })
   
   const resolver = zodResolver(rules);

   const submitForm = async ({ valid }: { valid: boolean }) => {
       console.log(valid);
   };
</script>

<template>
    <Form v-slot="$form" :initial-values="formData" :resolver="resolver" :validate-on-blur="true" :validate-on-value-update="false" @submit="submitForm">
        <div class="mb-3">
            <InputText name="email" type="email" v-model="formData.email" placeholder="Email" class="w-full" />
            <Message v-if="$form.email?.invalid" severity="error" variant="simple" size="small">{{ $form.email.error.message }}</Message>
        </div>
        <div class="mb-3">
            <InputText name="password" type="password" v-model="formData.password" placeholder="Password" class="w-full" />
            <Message v-if="$form.password?.invalid" severity="error" variant="simple" size="small">{{ $form.password.error.message}}</Message>
        </div>
        <span class="cursor-pointer block mb-3" @click="emits('resetPassword')">Passwort vergessen?</span>
        <div class="grid grid-cols-2 gap-3">
            <Button type="submit" label="Anmelden" class="w-full" />
            <Button type="submit" label="Github" icon="pi pi-github" class="w-full" severity="contrast" />
        </div>
    </Form>
</template>

<style scoped></style>