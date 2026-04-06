import { supabase } from '@/supabase';
import { useRequest } from './useRequest';

export function useAuth() {
    const { loading, errorMessage, handleRequest } = useRequest();

    const signUp = async (email: string, password: string) => {

        return await handleRequest(async () => {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) throw error;
            return data;
        });
    }

    return {
        loading,
        errorMessage,
        signUp,
    }
}