/* eslint-env node */
/*
 *  Vite.js bundler config for profile-card-sharp-shadow project.
 *  Created On 01 January 2022
 */

import merge from 'deepmerge'
import dirname from 'es-dirname'
import path from 'path'
import { defineConfig } from 'vite'

import base from '../../vite.config.js'

const project = path.basename(dirname())

export default merge(
    base,
    defineConfig({
        base: `/${project}/`,
        build: {
            emptyOutDir: true,
            outDir: `../../../dist/${project}`,
        },
    }),
)
