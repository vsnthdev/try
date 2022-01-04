/* eslint-env node */
/*
 *  Vite.js bundler config for index project.
 *  Created On 01 January 2022
 */

import merge from 'deepmerge'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import base from '../../vite.config.js'

export const setOutput = (config, projectName) => {
    config.base = `/${projectName}/`
    config.build.emptyOutDir = true
    config.build.outDir = `../../../dist/${projectName}`
}

const config = merge(
    base,
    defineConfig({
        build: {
            emptyOutDir: false,
            outDir: '../../../dist',
            rollupOptions: {
                plugins: [
                    copy({
                        targets: [
                            {
                                src: './src/assets/img/site_icon.png',
                                dest: '../../dist/',
                            },
                        ],
                    }),
                ],
            },
        },
        plugins: [],
    }),
)

config.plugins.push(
    // configure and setup this website as a Progressive Web App
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
)

export default config
