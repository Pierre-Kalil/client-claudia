/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEETS_API_KEY?: string;
  readonly VITE_SHEETS_ID?: string;
  readonly VITE_SHEETS_RANGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
