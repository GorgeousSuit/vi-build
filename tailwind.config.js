/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            },
            backgroundSize: {
                '200%': '200% 200%'
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'gradient-slow': 'gradient-move 10s ease infinite'
            },
            keyframes: {
                'gradient-move': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                }
            },
            colors: {
                primary1: '#2C2C2C',
                primary2: '#5A5A5A',
                secondary1: '#8D8741',
                secondary2: '#D9C5B2',
                accent1: '#E27D60 ',
                accent2: '#85CDCA',
                foregraound: '#EAEAEA',
                background: '#121212'
            }
        }
    },
    plugins: []
};
