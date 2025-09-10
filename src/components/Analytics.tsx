'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: any) => void
    }
}

export default function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') return

        // Google Analytics
        const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

        if (GA_TRACKING_ID && typeof window.gtag !== 'undefined') {
            const url = pathname + (searchParams ? searchParams.toString() : '')
            window.gtag('config', GA_TRACKING_ID, {
                page_location: url,
                page_title: document.title,
            })
        }
    }, [pathname, searchParams])

    // Track custom events
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
        if (process.env.NODE_ENV === 'development') return

        const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
        if (GA_TRACKING_ID && typeof window.gtag !== 'undefined') {
            window.gtag('event', eventName, {
                event_category: 'engagement',
                event_label: pathname,
                ...parameters
            })
        }
    }

    // Expose tracking function globally for components to use
    useEffect(() => {
        ; (window as any).trackEvent = trackEvent
    }, [])

    return null
}

// Utility functions for tracking specific events
export const trackCalculation = (calculatorType: string, values: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
        ; (window as any).trackEvent('salary_calculation', {
            calculator_type: calculatorType,
            gross_salary_range: values.grossSalary ? getRange(values.grossSalary) : undefined,
            event_category: 'calculator'
        })
    }
}

export const trackArticleRead = (articleTitle: string, readTime: string) => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
        ; (window as any).trackEvent('article_read', {
            article_title: articleTitle,
            read_time: readTime,
            event_category: 'education'
        })
    }
}

export const trackDownload = (downloadType: string) => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
        ; (window as any).trackEvent('file_download', {
            download_type: downloadType,
            event_category: 'engagement'
        })
    }
}

// Helper function to get salary range for privacy
const getRange = (salary: number): string => {
    if (salary < 25000) return '0-25k'
    if (salary < 50000) return '25k-50k'
    if (salary < 100000) return '50k-100k'
    if (salary < 200000) return '100k-200k'
    if (salary < 500000) return '200k-500k'
    return '500k+'
}
