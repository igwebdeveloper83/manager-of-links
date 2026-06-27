import { ref } from 'vue';

function toErrorMessage(error: unknown): string {
    const message = error instanceof Error ? error.message : 'Something went wrong'

    if (/failed to fetch|load failed|networkerror|hostname/i.test(message)) {
        return 'Cannot reach Supabase. Check VITE_SUPABASE_URL in .env (Project Settings → API), restart npm run dev, and clear browser storage.'
    }

    if (/rate limit|too many requests/i.test(message)) {
        return 'Email rate limit reached. Wait about an hour or check Authentication → Rate limits in Supabase.'
    }

    return message
}

export function useRequest() {
    const loading = ref(false);
    const errorMessage = ref('');

    const handleRequest = async (fn: () => Promise<unknown>) => {
        errorMessage.value = '';
        loading.value = true;

        try {
            return await fn()
        } catch (error: unknown) {
            errorMessage.value = toErrorMessage(error);
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