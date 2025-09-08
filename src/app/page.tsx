'use client'

import { motion } from 'framer-motion'
import { Calculator, BookOpen, PiggyBank, TrendingUp, Shield, Users } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        icon: Calculator,
        title: 'Salary Breakdown',
        description: 'Understand your salary structure with detailed breakdowns and visual charts',
        href: '/salary-breakdown',
        color: 'bg-blue-500'
    },
    {
        icon: Shield,
        title: 'Tax Information',
        description: 'Learn about tax slabs, deductions, and how your tax is calculated',
        href: '/tax-info',
        color: 'bg-green-500'
    },
    {
        icon: BookOpen,
        title: 'Financial Education',
        description: 'Expand your knowledge with articles on savings, investments, and budgeting',
        href: '/financial-education',
        color: 'bg-purple-500'
    }
]

const stats = [
    { icon: Users, label: 'Users Helped', value: '10,000+' },
    { icon: Calculator, label: 'Calculations Made', value: '50,000+' },
    { icon: PiggyBank, label: 'Money Saved', value: '$1M+' },
    { icon: TrendingUp, label: 'Financial Growth', value: '25%' }
]

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Master Your <span className="text-yellow-400">Financial Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Understand your salary, optimize your taxes, and build wealth with our comprehensive financial tools and education platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/salary-breakdown">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-yellow-400 text-primary-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
                                >
                                    Calculate Your Salary
                                </motion.button>
                            </Link>
                            <Link href="/financial-education">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors"
                                >
                                    Learn More
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need for Financial Success
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our comprehensive suite of tools and resources empowers you to make informed financial decisions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Link href={feature.href}>
                                    <div className="card hover:shadow-lg transition-shadow cursor-pointer group">
                                        <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <div className="mt-6 text-primary-600 font-medium group-hover:text-primary-700">
                                            Learn more →
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Trusted by Thousands
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join our community of financially empowered individuals
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-10 h-10 text-primary-600" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Take Control of Your Finances?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            Start your financial journey today with our comprehensive tools and educational resources.
                        </p>
                        <Link href="/salary-breakdown">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
                            >
                                Get Started Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
