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

    const signIn = async (email: string, password: string) => {

        return await handleRequest(async () => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;

            return data;
        });
    }

    const resetPassword = async (email: string) => {

        return await handleRequest(async () => {
            const redirectTo = `${window.location.origin}/reset-password`
            const { data, error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
                redirectTo,
            })
            if (error) throw error;

            return data;
        });
    }

    const updatePassword = async (password: string) => {

        return await handleRequest(async () => {
            const { data, error } = await supabase.auth.updateUser({password})
            if (error) throw error;

            return data;
        });
    }

    const signInWithGithub = async () => {

        return await handleRequest(async () => {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
            })
            if (error) throw error;

            return data;
        });
    }

    const signOut = async () => {
        return handleRequest(async () => {
          const { error } = await supabase.auth.signOut()
      
          if (error) throw error
      
          return true
        })
      }

    return {
        loading,
        errorMessage,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
        signInWithGithub
    }
}