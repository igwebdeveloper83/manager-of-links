
import { useToast } from 'primevue/usetoast'

/**
 * App-wide toast helpers. Requires a single `<Toast />` in the root layout (e.g. App.vue).
 */
export function useToastNotifications() {
  const toast = useToast()

  const showToast = (
    type: string,
    summary: string,
    detail = 'Something went wrong',
    life = 3000,
  ) => {
    toast.add({
      severity: type,
      summary,
      detail,
      life,
    })
  }
  return { showToast }

} 

  
