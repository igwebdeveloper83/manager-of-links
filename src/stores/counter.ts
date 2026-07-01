import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/supabase'

export const useUserStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  async function getUser() {
    const { data } = await supabase.auth.getUser()
    console.log(data)

    user.value = data.user ?? null
  }

  const resetUser = () => {
    user.value = null
  }

  return { user, getUser, resetUser }
})
