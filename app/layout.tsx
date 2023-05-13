/*
 *  The root layout of the app.
 *  Created On 13 May 2023
 */

import '../styles/index.css'
import { Footer, Header } from '../components'

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
        <body className='flex flex-col text-white bg-slate-1000 bg-dots bg-size-dots selection:bg-white/20'>
            {/* header */}
            <Header />

            {/* page contents */}
            {children}

            {/* footer */}
            <Footer />
        </body>
    </html>
}
