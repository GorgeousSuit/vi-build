import '@styles/globals.css';
import { Roboto } from 'next/font/google';

import Nav from '@components/Nav';
import Head from 'next/head';


const roboto = Roboto({
    weight: ['400', '700'], 
    subsets: ['latin'],    
  });

export const metadata = {
    title: 'LTD Projects',
    description: 'Template'
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <body className={`${roboto.className}`}>
                    <Nav className="relative" />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
