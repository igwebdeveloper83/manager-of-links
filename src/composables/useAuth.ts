import { supabase } from '@/supabase';
import { useRequest } from './useRequest';

export function useAuth() {
    const { loading, errorMessage, handleRequest } = useRequest();

    const signUp = async (email: string, password: string, firstname: string) => {

        return await handleRequest(async () => {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { first_name: firstname } },
            });
            if (error) throw error;

            if (data?.user?.id) {
                await supabase.from('users').insert([{ id: data.user.id, firstname, email }]);
            }
            return data;
        });
    }

    return {
        loading,
        errorMessage,
        signUp,
    }
}