import { Mail, Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
    product: [
        { name: 'Salary Breakdown', href: '/salary-breakdown' },
        { name: 'Tax Information', href: '/tax-info' },
        { name: 'Financial Education', href: '/financial-education' },
    ],
    resources: [
        { name: 'Blog', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ],
    social: [
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Github', href: '#', icon: Github },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Email', href: 'mailto:contact@salaryfy.io', icon: Mail },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary-600 text-white p-2 rounded-lg">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3-3a1 1 0 00-1 1v5a1 1 0 102 0V9a1 1 0 00-1-1zm-2-1a1 1 0 011 1v7a1 1 0 11-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold">Salaryfy.io</span>
                        </div>
                        <p className="text-gray-300 max-w-md leading-relaxed">
                            Empowering individuals with financial awareness through comprehensive salary analysis,
                            tax information, and educational resources for better financial decisions.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {footerLinks.social.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <social.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Salaryfy.io. All rights reserved. Built with ❤️ for financial empowerment.
                    </p>
                </div>
            </div>
        </footer>
    )
}
