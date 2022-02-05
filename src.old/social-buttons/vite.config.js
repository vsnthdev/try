/* eslint-env node */
/*
 *  Vite.js bundler config for social-buttons project.
 *  Created On 02 January 2022
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
