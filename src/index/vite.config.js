/*
 *  Vite.js bundler config for index project.
 *  Created On 01 January 2022
 */

import merge from 'deepmerge';
import { defineConfig } from 'vite';
import base from '../../vite.config.js';

export default merge(base, defineConfig({
    build: {
        outDir: '../dist'
    }
}))
