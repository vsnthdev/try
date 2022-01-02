/*
 *  Vite.js bundler config for index project.
 *  Created On 01 January 2022
 */

import merge from 'deepmerge';
import { defineConfig } from 'vite';
import base from '../../vite.config.js';
import copy from 'rollup-plugin-copy';

export default merge(base, defineConfig({
    build: {
        emptyOutDir: false,
        outDir: '../../../dist',
        rollupOptions: {
            plugins: [
                copy({
                    targets: [
                        { src: './src/assets/img/site_icon.png', dest: '../../dist/' }
                    ]
                })
            ]
        }
    },
}))
