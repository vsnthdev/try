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
    const metaTitle = !html.includes('vsnthdev-try-title')
    const metaCategory = !html.includes('vsnthdev-try-category')
    const metaBg = !html.includes('vsnthdev-try-bg')

    if (noIndex) logger.error(`"noindex" not found in ${getFilePath(file)}`)
    if (metaTitle) logger.error(`No "vsnthdev-try-title" meta attribute was found in ${getFilePath(file)}`)
    if (metaCategory) logger.error(`No "vsnthdev-try-category" meta attribute was found in ${getFilePath(file)}`)
    if (metaBg) logger.error(`No "vsnthdev-try-bg" meta attribute was found in ${getFilePath(file)}`)
}
