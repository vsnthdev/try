import axios from 'axios'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest'

import './tailwind.config.js';

// add the transition class after some time
setTimeout(() => {
    document.querySelector('body').classList.add('transition-colors')
}, 500)

const main = async () => {
    const octokit = new Octokit()

    const { data } = await octokit.rest.repos.getContent({
        owner: 'vsnthdev',
        repo: 'try',
        path: '/src'
    })

    const hidden = ['index']

    const markup = ({bg, title, category, url}) => `<a href="${url}">
    <article class="relative bg-center bg-cover bg-no-repeat rounded-xl shadow-card p-8 flex flex-col justify-between my-4 w-80 h-108 transition focus:outline-none active:transform-gpu active:scale-95 lg:my-12 lg:w-full lg:flex-row lg:items-center lg:h-auto lg:py-10" style="background: #${bg}">
        <div class="flex-grow-0 text-white z-10">
            <span class="text-sm font-black uppercase tracking-widest opacity-30">${category}</span>
            <h3 class="text-3xl font-bold mt-2">${title}</h3>
        </div>
        <div class="flex-shrink-0 lg:mt-auto z-10">
            <button class="text-light-900 shadow-card bg-white transition hover:bg-gray-200 font-semibold px-4 py-2 rounded-md focus:outline-none">Explore now</button>
        </div>
    </article>
    </a>`

    const safetyCheck = (elm, field) => {
        if (elm) {
            return elm.getAttribute('content')
        } else {
            return `No ${field}`
        }
    }

    for (const folder of data) {
        if (hidden.includes(folder.name)) continue
        if (folder.type == 'file') continue

        const { data: contents } = await axios({
            method: 'GET',
            url: `https://raw.githubusercontent.com/vsnthdev/try/main/src/${folder.name}/src/index.html`
        })

        const parser = new DOMParser()
        const doc = parser.parseFromString(contents, 'text/html')
        const cards = document.querySelector('#cards')
        
        const title = safetyCheck(doc.querySelector('meta[name=vsnthdev-try-title]'), 'Title')
        const category = safetyCheck(doc.querySelector('meta[name=vsnthdev-try-category]'), 'Category')
        const bg = safetyCheck(doc.querySelector('meta[name=vsnthdev-try-bg]'), 'Background')

        cards.innerHTML = cards.innerHTML + markup({
            bg,
            title,
            category,
            url: `/${folder.name}`
        })
    }
}

main()
