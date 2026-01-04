import '@/assets/styles/main.css'
import 'primeicons/primeicons.css'

import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';

import AppComponent from './App.vue'
import router from './router'

const app: App = createApp(AppComponent)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false, // Deaktiviert Dark Mode
    },
  },
})
app.use(ToastService)

app.mount('#app')
