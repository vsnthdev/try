/*
 *  Contains hooks that read data from Notion docs.
 *  Created On 13 May 2023
 */

import { Client } from '@notionhq/client'
import { camelCase } from 'change-case'

interface Project {
    type: string
    title: string
    preview: string
}

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export async function getProjects() {
    const databaseId = 'eca660c7498945ff88ef79c3213cbf69'

    const { results } = await notion.databases.query({
        database_id: databaseId,
    })

    const projects: Project[] = []
    const props = results.map((res: any) => res.properties)

    for (const prop of props) {
        const proj: any = {}

        for (const key in prop) {
            const value = prop[key]

            if (value.type == 'title') {
                proj[camelCase(key)] = value.title[0].plain_text
                continue
            }

            if (value.type == 'url') {
                proj[camelCase(key)] = value.url
                continue
            }

            if (value.type == 'rich_text') {
                if (value.rich_text.length == 0) continue
                proj[camelCase(key)] = value.rich_text[0].plain_text
                continue
            }

            if (value.type == 'select') {
                proj[camelCase(key)] = value.select.name
                continue
            }

            throw new Error(`Type "${value.type}" not implemented by getProjects() function.`)
        }

        projects.push(proj)
    }

    return projects
}
