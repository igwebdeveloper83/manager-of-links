
import { useToast } from 'primevue/usetoast'

/**
 * App-wide toast helpers. Requires a single `<Toast />` in the root layout (e.g. App.vue).
 */
export function useToastNotifications() {
  const toast = useToast()

  const showToast = (type: any, summary: any, detail: string ='something goes wrong') => {
    toast.add({
      severity: type,
      summary,
      detail,
      life: 3000,
    })
  }
  return { showToast }

} 

  
