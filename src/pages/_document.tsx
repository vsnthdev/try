/*
 *  Document override page for try project.
 *  Created On 23 October 2022
 */

import { Html, Head, Main, NextScript } from 'next/document'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'v-header': any
            'v-footer': any
            'v-sub-header': any
        }
    }
}

export default () => <Html className='h-full'>
    <Head>
         {/* theme color */}
         <meta name="theme-color" content="#ffffff" />

        {/* site icon */}
        <link rel="icon" type="image/png" sizes="any" href="https://try.vsnth.dev/assets/img/site_icon.png" />

        {/* vyaktitva */}
        <script type="module" src="https://unpkg.com/vyaktitva/dist/vyaktitva/vyaktitva.esm.js"></script>
    </Head>
    <body className='h-full bg-slate-100 font-medium text-slate-700 flex flex-col dark:bg-slate-900 dark:text-white selection:bg-sky-400/20'>
        {/* the header */}
        <v-header brand="Vasanth Srivatsa" />

        {/* page specific content */}
        <Main />

        {/* the footer */}
        <v-footer brand="Vasanth Srivatsa" class="mt-auto" />

        {/* additional scripts to be injected by Next.js */}
        <NextScript/>
    </body>
</Html>
