/* eslint-env node */
/*
 *  Vite.js bundler config for blog-index project.
 *  Created On 01 January 2022
 */

import dirname from 'es-dirname'
import path from 'path'

import getConfig from '../../vite.config.js'
import { setOutput } from '../index/vite.config.js'

export default env => {
    // construct the base configuration
    const config = getConfig(env)

    // set this project's output properties
    setOutput(config, path.basename(dirname()))

    // return the modified properties
    return config
}
