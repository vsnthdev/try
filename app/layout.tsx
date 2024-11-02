/*
 *  The root layout of the app.
 *  Created On 13 May 2023
 */

import '../styles/index.css'
import { Metadata, Viewport } from 'next'
import { Footer, Header } from '../components'
import { Mixpanel } from '../components/Mixpanel'

export const viewport: Viewport = {
    themeColor: '#292524',
    colorScheme: 'dark'
}

export const metadata: Metadata = {
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <html lang='en'>
        <head>
            {/* vyaktitva */}
            <link rel='stylesheet' href='https://vyaktitva.vercel.app/assets/css/fonts.css' />
        </head>
        <body className='flex flex-col text-white bg-neutral-900 selection:bg-white/20'>
            {/* header */}
            <Header />

            {/* page contents */}
            {children}

            {/* footer */}
            <Footer />
            <Mixpanel />
        </body>
    </html>
}
