/* eslint-env node */
/*
 *  Vite.js bundler config for index project.
 *  Created On 01 January 2022
 */

import copy from 'rollup-plugin-copy'
import { VitePWA } from 'vite-plugin-pwa'

import getConfig from '../../vite.config.js'

export const setOutput = (config, projectName) => {
    config.base = `/${projectName}/`
    config.build.emptyOutDir = true
    config.build.outDir = `../../../dist/${projectName}`
}

export default env => {
    const config = getConfig(env)

    // set build output manually
    config.build.emptyOutDir = false
    config.build.outDir = '../../../dist'
    config.build.rollupOptions = {
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
    }

    // configure and setup this website as a Progressive Web App
    config.plugins.push(
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

    return config
}
