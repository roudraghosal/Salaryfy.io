'use client'

import { Toaster } from 'react-hot-toast'
import { useTheme } from './ThemeProvider'

export default function ToastProvider() {
    const { theme } = useTheme()

    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Default options
                className: '',
                duration: 4000,
                style: {
                    background: theme === 'dark' ? '#374151' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#111827',
                    border: `1px solid ${theme === 'dark' ? '#4B5563' : '#E5E7EB'}`,
                    borderRadius: '0.5rem',
                    fontSize: '14px',
                    maxWidth: '500px',
                },

                // Success
                success: {
                    iconTheme: {
                        primary: '#10B981',
                        secondary: '#ffffff',
                    },
                },

                // Error
                error: {
                    iconTheme: {
                        primary: '#EF4444',
                        secondary: '#ffffff',
                    },
                },

                // Loading
                loading: {
                    iconTheme: {
                        primary: '#6B7280',
                        secondary: '#ffffff',
                    },
                },
            }}
        />
    )
}
