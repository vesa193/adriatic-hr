import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 4000,
        // proxy: {
        //     '/api': {
        //         target: 'https://api.adriatic.hr/test',
        //         changeOrigin: true,
        //         secure: false,
        //         rewrite: (path) => path.replace(/^\/api/, ''),
        //     },
        // },
    },
    resolve: {
        alias: {
            '@adr': path.resolve(__dirname, './src'),
            '@adr/assets': path.resolve(__dirname, './src/assets'),
            '@adr/components': path.resolve(__dirname, './src/components'),
        },
    },
});
