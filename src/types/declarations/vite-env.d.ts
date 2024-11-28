/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NODE_ENV?: 'development' | 'production';
    readonly HOST?: string;
    readonly PORT?: string;

    readonly VITE_REACT_STRICT_MODE?: 'true' | 'false';
}

interface ImportMeta {
    readonly dirname: string;
    readonly env: ImportMetaEnv;
    readonly filename: string;
}
