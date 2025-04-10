interface ImportMetaEnv {
    readonly VITE_CAFE24_REDIRECT_URI: any;
    readonly VITE_CAFE24_CLIENT_SECRET: any;
    readonly VITE_CAFE24_CLIENT_ID: any;
    readonly VITE_APP_API: string;
    readonly VITE_APP_TIME_OUT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  