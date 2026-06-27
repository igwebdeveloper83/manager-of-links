<script setup lang="ts">
    import { ref } from 'vue';
    import { z } from 'zod';
    import { zodResolver } from '@primevue/forms/resolvers/zod';
    import { Form } from '@primevue/forms';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import Message from 'primevue/message';
    import { useToastNotifications } from '../../composables/useToastNotifications'
    import { useAuth } from '../../composables/useAuth'
    import router from '@/router';

    const { showToast } = useToastNotifications()
    const { loading, errorMessage, updatePassword} = useAuth();

    const password = ref('')

    const rules = z.object({
        password: z.string().min(6, {message: 'must be at least 6 characters'})
    })
   
   const resolver = zodResolver(rules);

   const submitForm = async ({ valid }: { valid: boolean }) => {
        if (!valid) return

        try {
            await updatePassword(password.value);
            showToast('success', 'update password', 'password updated successfully')
            router.replace('/auth')
        } catch (error: any) {
            showToast('error', 'error by creating a new password', errorMessage.value)
            return
        }
    }






</script>

<template>
    <Form v-slot="$form" :initial-values="{ password }" :resolver="resolver" :validate-on-blur="true" :validate-on-value-update="false" @submit="submitForm">
        <div class="mb-3">
            <InputText name="password" type="password" v-model="password" placeholder="enter new password" class="w-full" />
            <Message v-if="$form.password?.invalid" severity="error" variant="simple" size="small">{{ $form.password.error.message}}</Message>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <Button type="submit" label="update password" class="w-full" :loading="loading" />
        </div>
    </Form>
</template>

