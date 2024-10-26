/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENT_BASE_URL: string;
  readonly VITE_ASSETS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
