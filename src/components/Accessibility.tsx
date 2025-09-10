'use client'

import { useEffect, useRef } from 'react'

interface SkipLinkProps {
    href: string
    children: React.ReactNode
}

export function SkipLink({ href, children }: SkipLinkProps) {
    return (
        <a
            href={href}
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 font-medium"
        >
            {children}
        </a>
    )
}

interface FocusTrapProps {
    children: React.ReactNode
    active: boolean
}

export function FocusTrap({ children, active }: FocusTrapProps) {
    const trapRef = useRef<HTMLDivElement>(null)
    const firstFocusableRef = useRef<HTMLElement | null>(null)
    const lastFocusableRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!active || !trapRef.current) return

        const focusableElements = trapRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        firstFocusableRef.current = focusableElements[0] as HTMLElement
        lastFocusableRef.current = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableRef.current) {
                    lastFocusableRef.current?.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastFocusableRef.current) {
                    firstFocusableRef.current?.focus()
                    e.preventDefault()
                }
            }
        }

        document.addEventListener('keydown', handleTabKey)
        firstFocusableRef.current?.focus()

        return () => document.removeEventListener('keydown', handleTabKey)
    }, [active])

    return <div ref={trapRef}>{children}</div>
}

interface AnnouncementProps {
    message: string
    priority?: 'polite' | 'assertive'
}

export function LiveRegion({ message, priority = 'polite' }: AnnouncementProps) {
    return (
        <div
            aria-live={priority}
            aria-atomic="true"
            className="sr-only"
        >
            {message}
        </div>
    )
}
