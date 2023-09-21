import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(),'');
    const host = env.VITE_URL_HMR ?? "localhost"

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false
                    }
                }
            }),
        ],
        server: {
            host,
            hmr: { host },
        },
        resolve: {
            alias: {
                '@': '/resources/js',
            },
        }
    }
});
