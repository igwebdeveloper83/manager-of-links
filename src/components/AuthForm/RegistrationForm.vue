<script setup lang="ts">
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import { z } from 'zod';
    import { zodResolver } from '@primevue/forms/resolvers/zod';
    import { Form } from '@primevue/forms';
    import Message from 'primevue/message';
    import { useToastNotifications } from '../../composables/useToastNotifications'
    import { useAuth } from '../../composables/useAuth'


    const { loading, errorMessage, signUp } = useAuth();

    const formData = ref({
        email: '',
        password: '',
        firstname:'',
    });

    const rules = z.object({
        firstname: z.string().min(3, {message: 'put your name!'}),
        email: z.email({message: 'invalid email'}),
        password: z.string().min(5, {message: 'must be at least 6 characters'})
    })

    const resolver = zodResolver(rules);

    const { showToast } = useToastNotifications()

    const submitForm = async ({ valid }: { valid: boolean }) => {
        if (!valid) return

        try {
            await signUp(formData.value.email, formData.value.password);
        } catch (error: any) {
            showToast('error', 'Registration', error.message)
            return
        }
    }


   
</script>

<template>
    <Form v-slot="$form" :initial-values="formData" :resolver="resolver" :validate-on-blur="true" :validate-on-value-update="false" @submit="submitForm">
        <div class="mb-3">
            <InputText name="email" type="email" v-model="formData.email" placeholder="Email" class="w-full" />
            <Message v-if="$form.email?.invalid" severity="error" variant="simple" size="small">{{ $form.email.error.message }}</Message>
        </div>
        <div class="mb-3">
            <InputText name="password" type="password" v-model="formData.password" placeholder="Password" class="w-full" />
            <Message v-if="$form.password?.invalid" severity="error" variant="simple" size="small">{{ $form.password.error.message }}</Message>
        </div>
        <div class="mb-3">
            <InputText name="firstname" type="text" v-model="formData.firstname" placeholder=" Add Firstname" class="w-full" />
            <Message v-if="$form.firstname?.invalid" severity="error" variant="simple" size="small">{{ $form.firstname.error.message }}</Message>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <Button type="submit" label="Registrieren" class="w-full" :loading="loading" />
            <Button type="submit" label="Github" icon="pi pi-github" class="w-full" severity="contrast" />
        </div>
    </Form>
</template>

<style scoped></style>