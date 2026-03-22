/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string
  readonly BASE_URL: string
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_KEY: string
  // Weitere Umgebungsvariablen hier hinzufügen
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
