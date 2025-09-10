'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Calculator, BookOpen, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { SearchTrigger } from './SearchModal'

const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Salary Breakdown', href: '/salary-breakdown', icon: Calculator },
    { name: 'Tax Info', href: '/tax-info', icon: Info },
    { name: 'Financial Education', href: '/financial-education', icon: BookOpen },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary-600 text-white p-2 rounded-lg">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">Salaryfy.io</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.icon && <item.icon className="h-4 w-4" />}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                        <SearchTrigger />
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button and controls */}
                    <div className="md:hidden flex items-center space-x-2">
                        <SearchTrigger />
                        <ThemeToggle />
                        <button
                            type="button"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.icon && <item.icon className="h-5 w-5" />}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
