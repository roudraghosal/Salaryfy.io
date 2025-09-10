'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
    loadTime: number
    renderTime: number
    firstContentfulPaint?: number
}

export default function PerformanceMonitor() {
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const measurePerformance = () => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            const paint = performance.getEntriesByType('paint')
            
            const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime

            setMetrics({
                loadTime: navigation.loadEventEnd - navigation.loadEventStart,
                renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                firstContentfulPaint: fcp
            })
        }

        // Wait for load event
        if (document.readyState === 'complete') {
            measurePerformance()
        } else {
            window.addEventListener('load', measurePerformance)
            return () => window.removeEventListener('load', measurePerformance)
        }
    }, [])

    // Only show in development
    if (process.env.NODE_ENV !== 'development' || !metrics) {
        return null
    }

    return (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded-lg font-mono z-50">
            <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
            <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
            {metrics.firstContentfulPaint && (
                <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
            )}
        </div>
    )
}
