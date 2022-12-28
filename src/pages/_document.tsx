/*
 *  Document override page for try project.
 *  Created On 23 October 2022
 */

import { Html, Head, Main, NextScript } from 'next/document'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'v-footer': any
            'v-sub-header': any
        }
    }
}

export default () => <Html className='h-full v-dark'>
    <Head>
        {/* site icon */}
        <link rel='icon' type='image/png' sizes='any' href='/assets/img/site_icon.png' />

        {/* vyaktitva */}
        <script type='module' src='https://unpkg.com/vyaktitva/dist/vyaktitva/vyaktitva.esm.js'></script>
        <link rel='stylesheet' href='https://vyaktitva.vercel.app/assets/css/fonts.css' />
    </Head>
    <body className='h-full flex flex-col text-white bg-slate-1000 bg-dots bg-size-dots'>
        {/* page specific content */}
        <Main />

        {/* the footer */}
        <v-footer brand='Vasanth Srivatsa' class='mt-auto' />

        {/* additional scripts to be injected by Next.js */}
        <NextScript />

        {/* Microanalytics tracking code */}
        <script data-host='https://microanalytics.io' data-dnt='false' src='https://microanalytics.io/js/script.js' id='ZwSg9rf6GA' async defer></script>
    </body>
</Html>
