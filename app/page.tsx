/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import Link from 'next/link'
import { getProjects } from '../hooks'
import { CodeIcon, EyeIcon } from 'lucide-react'

export const revalidate = 60

export default async function Page() {
    const projects = await getProjects()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-5xl flex flex-col px-8'>
                {/* page header */}
                <div className='select-none relative mb-10 px-3 md:py-14 lg:py-14 xl:py-10'>
                    <h1 className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-neutral-400 xl:text-4xl'>Playground where I </span><br className='hidden md:inline' />
                        <span className='text-neutral-100'>🥇 practice, ⚗️ experiment & ✨ create </span><br className='hidden lg:inline' />
                        <span className='text-neutral-400 xl:text-4xl '>different components and pages.</span>
                    </h1>
                </div>

                {/* cards for different elements */}
                <div className='flex flex-col space-y-12'>
                    {projects.map(({ preview, title, type }) => <article key={title} className='p-8 bg-neutral-800 select-none rounded-xl shadow-2xl shadow-black/[0.1] border border-neutral-600 transition-colors hover:border-neutral-400'>
                        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row'>
                            {/* title & type */}
                            <div className='flex flex-col space-y-2 md:flex-grow md:mr-4 xl:mr-8'>
                                <span className='text-sm font-black uppercase tracking-widest opacity-30'>{type}</span>
                                <h3 className='font-medium text-2xl text-neutral-100'>{title}</h3>
                            </div>

                            {/* preview button */}
                            <div className='flex md:flex-col md:justify-center'>
                                <div className='flex w-full space-x-3 md:justify-center'>
                                    <Link href={preview} target='_blank' className='flex w-full justify-center font-medium items-center space-x-1 px-3 py-3 bg-neutral-700 text-neutral-200 rounded-md transition-all hover:text-white hover:bg-neutral-600 active:scale-95 active:transform-gpu'>
                                        <EyeIcon className='h-5 w-5 md:h-5 md:w-5' />
                                        <span className='text-sm md:hidden'>Preview</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>)}
                </div>
            </div>
        </main>
    </>
}
