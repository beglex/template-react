import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
import {defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, import.meta.dirname, '');

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@root': resolve(import.meta.dirname, 'src'),
            },
        },
        server: {
            host: env.HOST,
            port: Number.parseInt(env.PORT, 10),
        },
    };
});
