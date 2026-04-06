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

    const { showToast } = useToastNotifications()
    const { loading, errorMessage, resetPassword } = useAuth();

    const rules = z.object({
        email: z.email({message: 'invalid email'}),
    })

    const resolver = zodResolver(rules);

    const email = ref('');

    const submitForm = async ({ valid }: { valid: boolean }) => {
        if (!valid) return

        try {
            await resetPassword(email.value);
            showToast('success', 'Reset Password', 'Password reset email sent')
        } catch (error: any) {
            showToast('error', 'Reset Password', errorMessage.value)
            return
        }
            
    }
   
</script>

<template>
    <Form v-slot="$form" :initial-values="{ email }" :resolver="resolver" :validate-on-blur="true" :validate-on-value-update="false" @submit="submitForm">
        <div class="mb-3">
            <InputText name="email" type="text" v-model="email" placeholder="Email" class="w-full" />
            <Message v-if="$form.email?.invalid" severity="error" variant="simple" size="small">{{ $form.email.error.message }}</Message>
        </div>
        <div class="grid">
            <Button type="submit" label="Reset Password" class="w-full" :loading="loading" />
        </div>
    </Form>
</template>

<style scoped></style>