import '@styles/globals.css';
import { Roboto } from 'next/font/google';
import Nav from '@components/Nav';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const metadata = {
    title: 'VI-(BUILD)',
    description:
        'Working together to breathe new life into your beloved spaces, one renovation project at a time with precision and creativity.',
    openGraph: {
        title: 'VI-(BUILD)',
        description:
            'Working together to breathe new life into your beloved spaces, one renovation project at a time with precision and creativity.',
        url: 'https://www.vibuildlondon.co.uk/',
        siteName: 'VI-(BUILD)',
        images: [
            {
                url: 'https://www.vibuildlondon.co.uk/og-image.png',
                type: 'image/png', // Image type
                width: 1200,
                height: 630,
                alt: 'VI-(BUILD) Logo',
            },
        ],
        type: 'website',
    },
    other: {
        'og:image': 'https://www.vibuildlondon.co.uk/og-image.png',
        'og:image:type': 'image/png',
        'og:image:width': '1200',
        'og:image:height': '630',
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Nav className="relative" />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
