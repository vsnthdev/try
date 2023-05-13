/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import Link from 'next/link'
import { Metadata } from 'next'
import { getProjects } from '../hooks'
import { ExternalLink } from 'lucide-react'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
    return {
        themeColor: '#1e293b',
        creator: 'Vasanth Srivatsa',
        applicationName: 'Try outs',
        title: 'Try outs — Vasanth Srivatsa',
        metadataBase: new URL('https://try.vsnth.dev'),
        description: 'Playground where I 🥇 practice, ⚗️ experiment & ✨ create different components and pages.',
        authors: {
            name: 'Vasanth Srivatsa',
            url: 'https://vsnth.dev'
        },
        icons: [
            {
                type: 'image/png',
                sizes: '256x256',
                url: 'https://vsnth.dev/api/siteIcon.png',
            }
        ],
        twitter: {
            creator: 'vsnthdev',
            card: 'summary_large_image',
            images: {
                width: 1200,
                height: 630,
                alt: 'banner',
                url: 'http://vsnth.dev/api/cover.png',
                secureUrl: 'https://vsnth.dev/api/cover.png',
            }
        },
        openGraph: {
            images: {
                width: 1200,
                height: 630,
                alt: 'banner',
                url: 'http://vsnth.dev/api/cover.png',
                secureUrl: 'https://vsnth.dev/api/cover.png',
            }
        }
    }
}

export default async function Page() {
    const projects = await getProjects()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-5xl flex flex-col px-8'>
                {/* page header */}
                <div className='select-none relative mb-10 px-3 md:py-14 lg:py-14 xl:py-10'>
                    <h1 className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-slate-500 xl:text-4xl'>Playground where I </span><br className='hidden md:inline' />
                        <span>🥇 practice, ⚗️ experiment & ✨ create </span><br className='hidden lg:inline' />
                        <span className='text-slate-500 xl:text-4xl '>different components and pages.</span>
                    </h1>
                </div>

                {/* cards for different elements */}
                <div className='flex flex-col space-y-12'>
                    {projects.map(({ preview, title, type }) => <article key={title} className='p-8 bg-gradient-to-r from-slate-900 to-slate-800 select-none rounded-xl shadow-2xl shadow-black/[0.1] border border-slate-600 transition-colors hover:border-slate-400'>
                        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row'>
                            {/* title & type */}
                            <div className='flex flex-col space-y-2 md:flex-grow md:mr-4 xl:mr-8'>
                                <span className='text-sm font-black uppercase tracking-widest opacity-30'>{type}</span>
                                <h3 className='font-medium text-2xl '>{title}</h3>
                            </div>

                            {/* preview button */}
                            <div className='flex md:flex-col md:justify-center'>
                                <Link href={preview} target='_blank' className='flex w-full justify-center font-medium items-center space-x-1 px-3 py-3 bg-slate-700 text-slate-200 rounded-md transition-all hover:text-white hover:bg-slate-600 active:scale-95 active:transform-gpu md:px-3 md:py-3'>
                                    <ExternalLink className='h-[1.1rem] w-[1.1rem] md:h-5 md:w-5' strokeWidth={2.33} />
                                    <span className='md:hidden'>Preview</span>
                                </Link>
                            </div>
                        </div>
                    </article>)}
                </div>
            </div>
        </main>
    </>
}
