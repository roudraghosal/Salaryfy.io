'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Calculator, Info, Users, Building, FileText } from 'lucide-react'

const taxSlabs2024 = [
    {
        range: 'Up to ₹2,50,000',
        rate: '0%',
        tax: '₹0',
        description: 'No tax for income up to 2.5 lakhs'
    },
    {
        range: '₹2,50,001 - ₹5,00,000',
        rate: '5%',
        tax: 'Up to ₹12,500',
        description: '5% tax on income above 2.5 lakhs'
    },
    {
        range: '₹5,00,001 - ₹10,00,000',
        rate: '20%',
        tax: 'Up to ₹1,12,500',
        description: '20% tax on income above 5 lakhs'
    },
    {
        range: 'Above ₹10,00,000',
        rate: '30%',
        tax: 'Variable',
        description: '30% tax on income above 10 lakhs'
    }
]

const deductions = [
    {
        section: '80C',
        title: 'Investment Deductions',
        limit: '₹1,50,000',
        items: ['EPF', 'PPF', 'ELSS', 'Life Insurance', 'Home Loan Principal', 'Tax Saver FD'],
        icon: Building
    },
    {
        section: '80D',
        title: 'Medical Insurance',
        limit: '₹75,000',
        items: ['Health Insurance Premium', 'Preventive Health Checkup', 'Parents Medical Insurance'],
        icon: Shield
    },
    {
        section: '24(b)',
        title: 'Home Loan Interest',
        limit: '₹2,00,000',
        items: ['Self-Occupied Property Interest', 'Let-out Property Interest (No Limit)'],
        icon: Building
    },
    {
        section: '80E',
        title: 'Education Loan Interest',
        limit: 'No Limit',
        items: ['Higher Education Loan Interest', 'Vocational Course Interest'],
        icon: FileText
    }
]

const taxRegimes = [
    {
        title: 'Old Tax Regime',
        description: 'Traditional tax structure with various deductions and exemptions',
        pros: ['Multiple deduction options', 'HRA exemption available', 'LTA exemption'],
        cons: ['Higher tax rates', 'Complex calculation', 'More documentation'],
        suitableFor: 'Individuals with significant investments and expenses'
    },
    {
        title: 'New Tax Regime',
        description: 'Simplified tax structure with lower rates but fewer deductions',
        pros: ['Lower tax rates', 'Simple calculation', 'Standard deduction available'],
        cons: ['Limited deductions', 'No HRA exemption', 'No investment benefits'],
        suitableFor: 'Individuals with limited investments and expenses'
    }
]

export default function TaxInfoPage() {
    const [selectedTab, setSelectedTab] = useState('slabs')
    const [annualIncome, setAnnualIncome] = useState('')
    const [calculatedTax, setCalculatedTax] = useState<number | null>(null)

    const calculateTax = () => {
        const income = parseFloat(annualIncome)
        if (!income || income <= 0) return

        let tax = 0
        if (income > 250000) {
            if (income <= 500000) {
                tax = (income - 250000) * 0.05
            } else if (income <= 1000000) {
                tax = 12500 + (income - 500000) * 0.2
            } else {
                tax = 112500 + (income - 1000000) * 0.3
            }
        }

        // Add 4% cess
        tax = tax * 1.04
        setCalculatedTax(tax)
    }

    const tabs = [
        { id: 'slabs', label: 'Tax Slabs', icon: Calculator },
        { id: 'deductions', label: 'Deductions', icon: FileText },
        { id: 'regimes', label: 'Tax Regimes', icon: Info },
        { id: 'calculator', label: 'Quick Calculator', icon: Calculator }
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Shield className="h-12 w-12 text-primary-600 mr-3" />
                        <h1 className="text-4xl font-bold text-gray-900">Tax Information Center</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Understand Indian income tax structure, deductions, and make informed financial decisions.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-t-lg font-medium transition-colors ${selectedTab === tab.id
                                    ? 'bg-primary-600 text-white border-b-2 border-primary-600'
                                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                }`}
                        >
                            <tab.icon className="h-5 w-5 mr-2" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-96">
                    {selectedTab === 'slabs' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="card mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Tax Slabs 2024-25</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Income Range</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tax Rate</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Maximum Tax</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {taxSlabs2024.map((slab, index) => (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    className="border-b border-gray-100 hover:bg-gray-50"
                                                >
                                                    <td className="py-4 px-4 font-medium">{slab.range}</td>
                                                    <td className="py-4 px-4">
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${slab.rate === '0%' ? 'bg-green-100 text-green-800' :
                                                                slab.rate === '5%' ? 'bg-yellow-100 text-yellow-800' :
                                                                    slab.rate === '20%' ? 'bg-orange-100 text-orange-800' :
                                                                        'bg-red-100 text-red-800'
                                                            }`}>
                                                            {slab.rate}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4">{slab.tax}</td>
                                                    <td className="py-4 px-4 text-gray-600">{slab.description}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> Additional 4% Health and Education Cess is applicable on the calculated tax amount.
                                        These rates are for the financial year 2024-25 under the old tax regime.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {selectedTab === 'deductions' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                {deductions.map((deduction, index) => (
                                    <motion.div
                                        key={deduction.section}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center">
                                                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                                                    <deduction.icon className="h-6 w-6 text-primary-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{deduction.title}</h3>
                                                    <p className="text-sm text-primary-600 font-medium">Section {deduction.section}</p>
                                                </div>
                                            </div>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {deduction.limit}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {deduction.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {selectedTab === 'regimes' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {taxRegimes.map((regime, index) => (
                                <motion.div
                                    key={regime.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="card"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{regime.title}</h3>
                                    <p className="text-gray-600 mb-6">{regime.description}</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">✓ Advantages</h4>
                                            <ul className="space-y-1">
                                                {regime.pros.map((pro, proIndex) => (
                                                    <li key={proIndex} className="text-sm text-gray-600 flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-2">✗ Disadvantages</h4>
                                            <ul className="space-y-1">
                                                {regime.cons.map((con, conIndex) => (
                                                    <li key={conIndex} className="text-sm text-gray-600 flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-gray-200">
                                            <h4 className="font-semibold text-gray-700 mb-2">Best Suited For</h4>
                                            <p className="text-sm text-gray-600">{regime.suitableFor}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {selectedTab === 'calculator' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="card">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Tax Calculator</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-2">
                                            Annual Income (₹)
                                        </label>
                                        <input
                                            type="number"
                                            id="annualIncome"
                                            value={annualIncome}
                                            onChange={(e) => setAnnualIncome(e.target.value)}
                                            className="input-field text-lg"
                                            placeholder="Enter your annual income"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={calculateTax}
                                        disabled={!annualIncome || parseFloat(annualIncome) <= 0}
                                        className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Calculate Tax
                                    </motion.button>

                                    {calculatedTax !== null && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl"
                                        >
                                            <div className="text-center">
                                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Estimated Annual Tax</h3>
                                                <p className="text-3xl font-bold text-primary-600">
                                                    ₹{calculatedTax.toLocaleString()}
                                                </p>
                                                <p className="text-sm text-gray-600 mt-2">
                                                    (Including 4% Health & Education Cess)
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Disclaimer</h4>
                                    <p className="text-sm text-yellow-700">
                                        This is a basic tax calculation for illustration purposes. Actual tax may vary based on
                                        deductions, exemptions, and other factors. Please consult a tax professional for accurate calculations.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}
