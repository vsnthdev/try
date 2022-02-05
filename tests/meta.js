import fs from 'fs/promises'
import glob from 'glob'
import path from 'path'
import dirname from 'es-dirname'
import itivrutaha from 'itivrutaha'
import chalk from 'chalk'

const logger = await itivrutaha.createNewLogger({
    appName: 'try',
    bootLog: false,
    shutdownLog: false,
})

const getFilePath = file => {
    const [dir, name] = file.split('src/pages')[1].slice(1).split('/')
    return `${chalk.redBright(dir)}${chalk.gray.underline('/' + name)}`
}

const files = glob.sync(path.join(dirname(), '..', 'src', 'pages', '**', '*.html'))

for (const file of files) {
    const html = await fs.readFile(file, 'utf-8')

    const noIndex = !html.includes('<meta name="robots" content="noindex" />')

    if (noIndex) logger.error(`"noindex" not found in ${getFilePath(file)}`, 2)
}
