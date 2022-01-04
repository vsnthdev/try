/* eslint-env node */
/*
 *  Vite.js bundler config for signup-for-newsletter-card-with-sharp-shadow project.
 *  Created On 01 January 2022
 */

import dirname from 'es-dirname'
import path from 'path'

import getConfig from '../../vite.config.js'
import { setOutput } from '../index/vite.config.js'

export default env => {
    const config = getConfig(env)
    setOutput(config, path.basename(dirname()))

    return config
}
