/* eslint-env node */
/*
 *  Global Vite.js configuration used across all sub-projects.
 *  Created On 01 January 2022
 */

import { defineConfig } from 'vite'

export default env =>
    defineConfig({
        clearScreen: false,
        publicDir: '../public',
        build: {
            assetsDir: '',
        },
        server: {
            fs: {
                strict: false,
            },
        },
        plugins: [],
    })
