/* eslint-env node */
/*
 *  Global Vite.js configuration used across all sub-projects.
 *  Created On 01 January 2022
 */

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default () =>
    defineConfig({
        clearScreen: false,
        publicDir: '../public',
        build: {
            minify: 'esbuild',
            assetsDir: '',
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
        ],
    })
