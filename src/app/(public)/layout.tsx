import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home Page - Codice',
    description: ''
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className="scroll-smooth">
            <body>{children}</body>
        </html>
    );
}
