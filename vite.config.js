/* eslint-env node */
/*
 *  Global Vite.js configuration used across all sub-projects.
 *  Created On 01 January 2022
 */

import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'

export default ({ mode }) =>
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
            mode == 'production'
                ? minifyHtml({
                      minifyCSS: true,
                      minifyJS: true,
                  })
                : null,
        ],
    })
