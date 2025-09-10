'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Calculator, FileText, Info, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SearchResult {
    id: string
    title: string
    description: string
    url: string
    category: 'page' | 'article' | 'tool'
    icon: React.ComponentType<{ className?: string }>
}

const searchData: SearchResult[] = [
    {
        id: 'salary-calculator',
        title: 'Salary Breakdown Calculator',
        description: 'Calculate detailed salary breakdown with tax and deductions',
        url: '/salary-breakdown',
        category: 'tool',
        icon: Calculator
    },
    {
        id: 'tax-info',
        title: 'Tax Information Center',
        description: 'Learn about tax slabs, deductions and tax planning',
        url: '/tax-info',
        category: 'page',
        icon: Info
    },
    {
        id: 'financial-education',
        title: 'Financial Education',
        description: 'Comprehensive guides on personal finance and investing',
        url: '/financial-education',
        category: 'page',
        icon: BookOpen
    },
    // Add more search data as needed
]

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Search functionality
    useEffect(() => {
        if (query.trim()) {
            const filteredResults = searchData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            )
            setResults(filteredResults)
            setSelectedIndex(0)
        } else {
            setResults(searchData.slice(0, 3)) // Show top results when no query
        }
    }, [query])

    // Keyboard navigation
    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (!isOpen) return

            switch (e.key) {
                case 'Escape':
                    onClose()
                    break
                case 'ArrowDown':
                    e.preventDefault()
                    setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
                    break
                case 'ArrowUp':
                    e.preventDefault()
                    setSelectedIndex(prev => Math.max(prev - 1, 0))
                    break
                case 'Enter':
                    e.preventDefault()
                    if (results[selectedIndex]) {
                        router.push(results[selectedIndex].url)
                        onClose()
                    }
                    break
            }
        }

        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [isOpen, results, selectedIndex, router, onClose])

    const handleResultClick = (url: string) => {
        router.push(url)
        onClose()
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="min-h-screen px-4 text-center">
                    <div className="inline-block w-full max-w-2xl pt-16 text-left align-middle">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
                        >
                            {/* Search Input */}
                            <div className="flex items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <Search className="w-5 h-5 text-gray-400 mr-3" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search for calculators, guides, or tools..."
                                    className="flex-1 text-lg bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                                <button
                                    onClick={onClose}
                                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Results */}
                            <div className="max-h-96 overflow-y-auto">
                                {results.length > 0 ? (
                                    results.map((result, index) => {
                                        const Icon = result.icon
                                        return (
                                            <motion.button
                                                key={result.id}
                                                onClick={() => handleResultClick(result.url)}
                                                className={`w-full flex items-center px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                                                    selectedIndex === index 
                                                        ? 'bg-primary-50 dark:bg-primary-900/20 border-r-2 border-primary-500' 
                                                        : ''
                                                }`}
                                                whileHover={{ x: 4 }}
                                            >
                                                <div className={`p-2 rounded-lg mr-4 ${
                                                    result.category === 'tool' 
                                                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                                                        : result.category === 'article'
                                                        ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                                                        : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                                                }`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 dark:text-white">
                                                        {result.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {result.description}
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-400 dark:text-gray-500 uppercase">
                                                    {result.category}
                                                </div>
                                            </motion.button>
                                        )
                                    })
                                ) : query.trim() ? (
                                    <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                                        <FileText className="w-8 h-8 mx-auto mb-3 opacity-50" />
                                        <p>No results found for "{query}"</p>
                                        <p className="text-sm mt-1">Try searching for calculators, tax info, or education</p>
                                    </div>
                                ) : null}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-b-xl border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-4">
                                        <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">↵</kbd>
                                        <span>to select</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">↑↓</kbd>
                                        <span>to navigate</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">esc</kbd>
                                        <span>to close</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

// Search trigger component
export function SearchTrigger() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(true)
            }
        }

        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [])

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                <Search className="w-4 h-4" />
                <span>Search...</span>
                <kbd className="hidden sm:inline-block px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                    ⌘K
                </kbd>
            </button>

            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                title="Search"
            >
                <Search className="w-5 h-5" />
            </button>

            <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
