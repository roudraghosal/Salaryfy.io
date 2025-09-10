import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import ToastProvider from '@/components/ToastProvider'
import Analytics from '@/components/Analytics'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Salaryfy.io - Financial Awareness & Empowerment Platform',
    description: 'Calculate salary breakdowns, understand tax deductions, and improve financial literacy with our comprehensive tools and educational resources.',
    keywords: ['salary calculator', 'tax calculator', 'financial planning', 'budgeting', 'investment guide', 'India tax slabs'],
    authors: [{ name: 'Salaryfy Team' }],
    creator: 'Salaryfy.io',
    publisher: 'Salaryfy.io',
    metadataBase: new URL('https://salaryfy.io'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Salaryfy.io - Financial Awareness & Empowerment Platform',
        description: 'Calculate salary breakdowns, understand tax deductions, and improve financial literacy with our comprehensive tools.',
        url: 'https://salaryfy.io',
        siteName: 'Salaryfy.io',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Salaryfy.io - Financial Awareness Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salaryfy.io - Financial Awareness & Empowerment',
        description: 'Calculate salary breakdowns, understand tax deductions, and improve financial literacy.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0ea5e9" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    <ErrorBoundary>
                        <Analytics />
                        <Navbar />
                        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
                            {children}
                        </main>
                        <Footer />
                        <ToastProvider />
                        <PerformanceMonitor />
                    </ErrorBoundary>
                </ThemeProvider>
            </body>
        </html>
    )
}
