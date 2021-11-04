import axios from 'https://cdn.skypack.dev/axios'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest'

const octokit = new Octokit()

const { data } = await octokit.rest.repos.getContent({
    owner: 'vsnthdev',
    repo: 'try'
})

const excluded = ['.gitignore', 'index']

for (const folder of data) {
    if (excluded.includes(folder.name)) continue

    const { data:contents } = await axios({
        method: 'GET',
        url: `https://raw.githubusercontent.com/vsnthdev/try/main/${folder.name}/index.html`
    })

    const parser = new DOMParser()
    const doc = parser.parseFromString(contents, 'text/html')

    const title = doc.querySelector('title').textContent

    const anchor = document.createElement('a')
    anchor.textContent = title
    anchor.href = `https://try.vsnth.dev/${folder.name}`

    document.body.appendChild(anchor)
}
