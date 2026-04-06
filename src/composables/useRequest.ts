import { ref } from 'vue';

export function useRequest() {
    const loading = ref(false);
    const errorMessage = ref('');

    const handleRequest = async (fn: () => Promise<any>) => {
        errorMessage.value = '';
        loading.value = true;

        try {
            return await fn()
        } catch (error: any) {
            errorMessage.value =error.message;
            throw error;
        } finally {
            loading.value = false;
        }
    }
    return {
        loading,
        errorMessage,
        handleRequest,
    }
}