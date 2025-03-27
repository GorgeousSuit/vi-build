import '@styles/globals.css';
import { Roboto } from 'next/font/google';

import Nav from '@components/Nav';
import Head from 'next/head';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const metadata = {
    title: 'VI-(BUILD)',
    description:
        'Working together to breathe new life into your beloved spaces, one renovation project at a time with precision and creativity.'
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta property="og:title" content="VI-(BUILD)" />
                <meta
                    property="og:description"
                    content="Working together to breathe new life into your beloved spaces, one renovation project at a time with precision and creativity."
                />
                <meta
                    property="og:image"
                    content="public/logo/Main black logo.png"
                />
                <meta property="og:url" content="https://www.vibuildlondon.co.uk/" />
                <meta property="og:type" content="website" />
            </Head>
            <body className={`${roboto.className}`}>
                <Nav className="relative" />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
