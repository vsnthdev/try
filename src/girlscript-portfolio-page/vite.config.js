/*
 *  Vite.js bundler config for girlscript-portfolio-page project.
 *  Created On 01 January 2022
 */

import merge from 'deepmerge';
import { defineConfig } from 'vite';
import base from '../../vite.config.js';
import dirname from 'es-dirname'
import path from 'path'

const project = path.basename(dirname())

export default merge(base, defineConfig({
    base: `/${project}/`,
    build: {
        emptyOutDir: true,
        outDir: `../../../dist/${project}`
    }
}))
