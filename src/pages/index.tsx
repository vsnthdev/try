/*
 *  The main page of try project.
 *  Created On 24 October 2022
 */

import { NextPage, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

export const getStaticProps = async () => {
    return {
        props: {}
    }
}

const Index: NextPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) =>  {
    return <>
        {/* page SEO */}
        <NextSeo
            title={`Try outs - Vasanth Srivatsa`}
        />

        {/* page container */}
        <div className='container mx-auto'>
            <div className='w-full max-w-5xl mx-auto px-7'>
                {/* page title */}
                <div className='pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-20 lg:pb-14 xl:pt-24 xl:pb-16'>
                    <h1 className='leading-normal text-3xl font-semibold sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-slate-500 xl:text-4xl dark:text-white/60'>Playground where I </span><br className='hidden md:inline' />
                        <span className='font-bold'>🥇 practice, ⚗️ experiment & ✨ create </span><br className='hidden lg:inline' />
                        <span className='text-slate-500 xl:text-4xl dark:text-white/60'>different components and pages.</span>
                    </h1>
                </div>

                {/* cards for different elements */}
                <div></div>
            </div>
        </div>
    </>
}

export default Index
