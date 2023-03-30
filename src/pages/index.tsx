/*
 *  The main page of try project.
 *  Created On 24 October 2022
 */

import { NextSeo } from 'next-seo'
import { Header } from 'vyaktitva'
import { camelCase } from 'change-case'
import { Client } from '@notionhq/client'
import { NextPage, InferGetStaticPropsType } from 'next'

interface Transformed {
    type: string
    preview: string
    title: string
}

const transform = props => {
    const returnable = {}

    for (const oldKey in props) {
        const obj = props[oldKey]
        const key = camelCase(oldKey)

        if (obj.type == 'title') {
            returnable[key] = obj.title[0].plain_text
        } else if (obj.type == 'url') {
            returnable[key] = obj.url
        } else if (obj.type == 'rich_text') {
            if (obj.rich_text.length == 0) continue
            returnable[key] = obj.rich_text[0].plain_text
        } else if (obj.type == 'select') {
            returnable[key] = obj.select.name
        } else {
            console.log(`Found new type "${obj.type}" not implemented by transform() function`)
        }
    }

    return returnable as Transformed
}

export const getStaticProps = async () => {
    // creating a Notion API client
    const notion = new Client({
        auth: process.env.NOTION_TOKEN
    })

    // get the database
    const { results } = await notion.databases.query({
        database_id: process.env.NOTION_DB
    })

    return {
        revalidate: 60,
        props: {
            projects: results.map((res: any) => transform(res.properties))
        }
    }
}

const Index: NextPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <>
        {/* page SEO */}
        <NextSeo
            title={`Try outs - Vasanth Srivatsa`}
            description='Playground where I 🥇 practice, ⚗️ experiment & ✨ create different components and pages.'
        />

        {/* site header */}
        <Header brand='Vasanth Srivatsa' />

        {/* page container */}
        <div className='container mx-auto'>
            <div className='w-full max-w-5xl mx-auto px-7'>
                {/* page title */}
                <div className='select-none pt-10 pb-10 px-3 md:pt-14 md:pb-14 lg:pt-20 lg:pb-14 xl:pt-10 xl:pb-20 xl:px-0'>
                    <h1 className='leading-normal text-center text-3xl font-semibold sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-slate-500 xl:text-4xl'>Playground where I </span><br className='hidden md:inline' />
                        <span className='font-bold'>🥇 practice, ⚗️ experiment & ✨ create </span><br className='hidden lg:inline' />
                        <span className='text-slate-500 xl:text-4xl '>different components and pages.</span>
                    </h1>
                </div>

                {/* cards for different elements */}
                <div className='flex flex-col space-y-12 pb-14 md:pb-24 lg:pb-32'>
                    {projects.map(project => <article key={project.title} className='bg-gradient-to-r from-slate-900 to-slate-800/70 backdrop-blur-sm select-none rounded-xl shadow-2xl shadow-black/[0.1] p-8 flex flex-col justify-between md:flex-row focus:outline-none'>
                        <div>
                            <span className='text-sm font-black uppercase tracking-widest opacity-30'>{project.type}</span>
                            <h3 className='text-3xl font-semibold mt-2'>{project.title}</h3>
                        </div>
                        <div className='mt-6 flex space-x-4'>
                            <a href={project.preview} rel='noopener' target='_blank' className='bg-slate-700 p-3 rounded-xl'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 pointer-events-none'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'></path>
                                </svg>
                            </a>
                        </div>
                    </article>)}
                </div>
            </div>
        </div>
    </>
}

export default Index
