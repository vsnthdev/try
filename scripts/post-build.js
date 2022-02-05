/*
 *  A post-build script that copies static sites into the dist/ directory.
 *  Created On 05 February 2022
 */

import dirname from 'es-dirname'
import path from 'path'
import ncp from 'ncp'

ncp(path.join(dirname(), '..', 'pages'), path.join(dirname(), '..', 'dist', 'pages'))

console.log('\nFinished copying pages.')
