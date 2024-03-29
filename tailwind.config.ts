import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/login/**/*.{html,js}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'ibm': ['IBM Plex Mono', 'monospace'],
            },
            colors: {
                'bg': '#151515',
            }
        }
    },
    plugins: []
};
export default config;
