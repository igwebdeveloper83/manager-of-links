import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'

import AppComponent from './App.vue'
import router from './router'

const app: App = createApp(AppComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')
