import {resolve} from 'path'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/woff|woff2|eot|ttf/.test(extType)) {
                        extType = "fonts";
                    }
                    return `assets/${extType}/[name][extname]`;
                },
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
            },
        }
    },
    server: {
        port: 8080
    },
    plugins: [
        ViteSvgSpriteWrapper({
            icons: 'src/assets/img/svg/*.svg',
            outputDir: 'src/public/img'
        }),
    ],
}