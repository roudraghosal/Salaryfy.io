'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme()

    // Show a placeholder during SSR
    if (!mounted) {
        return (
            <div className="p-2 rounded-lg bg-gray-100 text-gray-800 transition-colors w-9 h-9">
                <Moon className="w-5 h-5" />
            </div>
        )
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'light' ? (
                    <Moon className="w-5 h-5" />
                ) : (
                    <Sun className="w-5 h-5" />
                )}
            </motion.div>
        </motion.button>
    )
}
