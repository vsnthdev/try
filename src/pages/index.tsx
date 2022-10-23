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
    </>
}

export default Index
