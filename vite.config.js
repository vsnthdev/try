/* eslint-env node */
/*
 *  Global Vite.js configuration used across all sub-projects.
 *  Created On 01 January 2022
 */

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'

export default () =>
    defineConfig({
        clearScreen: false,
        publicDir: '../public',
        build: {
            minify: 'esbuild',
            assetsDir: '',
            outDir: '../../../dist',
        },
        server: {
            fs: {
                strict: false,
            },
        },
        plugins: [
            // minify html during production
            createHtmlPlugin({
                minify: {
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                },
            }),

            VitePWA({
                strategies: 'injectManifest',
                srcDir: 'assets/js',
                filename: 'sw.js',
                injectManifest: {
                    globPatterns: ['./*.{js,css,html,png}'],
                },
                manifest: {
                    name: 'Try Outs',
                    short_name: 'Try Outs',
                    orientation: 'portrait-primary',
                    id: 'dev.vsnth.try',
                    theme_color: '#FFFFFF',
                    description: 'Playground where I try & create different components and pages.',
                    icons: [
                        {
                            src: 'site_icon.png',
                            sizes: '540x540',
                            type: 'image/png',
                        },
                    ],
                },
            }),
        ],
    })
