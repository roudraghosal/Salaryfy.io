'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, DollarSign, TrendingUp, Download, AlertCircle, CheckCircle, Info } from 'lucide-react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { LiveRegion } from '@/components/Accessibility'

interface ValidationError {
    field: string
    message: string
}

interface SalaryInput {
    grossSalary: string
    city: 'metro' | 'non-metro'
    age: string
    hasInsurance: boolean
}

interface EnhancedBreakdown {
    grossSalary: number
    basicSalary: number
    hra: number
    allowances: number
    providentFund: number
    professionalTax: number
    incomeTax: number
    otherDeductions: number
    netSalary: number
    takeHomePercentage: number
    taxSavings?: number
}

export default function EnhancedSalaryCalculator() {
    const [input, setInput] = useState<SalaryInput>({
        grossSalary: '',
        city: 'metro',
        age: '',
        hasInsurance: false
    })

    const [breakdown, setBreakdown] = useState<EnhancedBreakdown | null>(null)
    const [isCalculating, setIsCalculating] = useState(false)
    const [errors, setErrors] = useState<ValidationError[]>([])
    const [announcement, setAnnouncement] = useState('')

    const validateInput = useCallback((): ValidationError[] => {
        const errors: ValidationError[] = []

        const salary = parseFloat(input.grossSalary)
        if (!input.grossSalary || isNaN(salary) || salary <= 0) {
            errors.push({ field: 'grossSalary', message: 'Please enter a valid gross salary' })
        } else if (salary < 10000) {
            errors.push({ field: 'grossSalary', message: 'Salary should be at least ₹10,000' })
        } else if (salary > 10000000) {
            errors.push({ field: 'grossSalary', message: 'Salary seems too high. Please check the amount' })
        }

        const age = parseInt(input.age)
        if (!input.age || isNaN(age) || age < 18 || age > 70) {
            errors.push({ field: 'age', message: 'Please enter a valid age (18-70)' })
        }

        return errors
    }, [input])

    const calculateAdvancedBreakdown = useCallback((input: SalaryInput): EnhancedBreakdown => {
        const gross = parseFloat(input.grossSalary)
        const age = parseInt(input.age)

        // Advanced salary structure calculations
        const basicSalary = Math.min(gross * 0.4, 15000) // Basic salary with ceiling
        const hra = input.city === 'metro' ? gross * 0.5 : gross * 0.4 // HRA based on city
        const standardDeduction = 50000 // Standard deduction

        // Calculate actual HRA based on rent (assuming 30% of gross as rent)
        const rentPaid = gross * 12 * 0.3 // Assuming 30% as rent annually
        const actualHRA = Math.min(
            hra * 12,
            rentPaid - (basicSalary * 12 * 0.1),
            input.city === 'metro' ? basicSalary * 12 * 0.5 : basicSalary * 12 * 0.4
        )

        const allowances = gross - basicSalary - (hra / 12)

        // Deductions
        const providentFund = basicSalary * 0.12
        const professionalTax = Math.min(2500 / 12, gross * 0.002)

        // Income tax calculation with new regime option
        const annualGross = gross * 12
        const taxableIncome = annualGross - standardDeduction - (actualHRA || 0) - (providentFund * 12)
        const incomeTax = calculateIncomeTax(Math.max(0, taxableIncome), age) / 12

        const otherDeductions = input.hasInsurance ? 0 : gross * 0.005 // Health insurance premium

        const netSalary = gross - providentFund - professionalTax - incomeTax - otherDeductions
        const takeHomePercentage = (netSalary / gross) * 100

        // Calculate potential tax savings
        const maxTaxSavings = calculateTaxSavings(taxableIncome, age)

        return {
            grossSalary: gross,
            basicSalary,
            hra: hra / 12,
            allowances,
            providentFund,
            professionalTax,
            incomeTax,
            otherDeductions,
            netSalary,
            takeHomePercentage,
            taxSavings: maxTaxSavings / 12
        }
    }, [])

    const calculateIncomeTax = (annualIncome: number, age: number): number => {
        // Simplified tax calculation for 2024-25
        let tax = 0
        const limit1 = age >= 60 ? 300000 : 250000
        const limit2 = age >= 60 ? 500000 : 500000
        const limit3 = 1000000

        if (annualIncome > limit1) {
            if (annualIncome <= limit2) {
                tax += (annualIncome - limit1) * 0.05
            } else if (annualIncome <= limit3) {
                tax += (limit2 - limit1) * 0.05 + (annualIncome - limit2) * 0.2
            } else {
                tax += (limit2 - limit1) * 0.05 + (limit3 - limit2) * 0.2 + (annualIncome - limit3) * 0.3
            }
        }

        // Add cess
        tax += tax * 0.04
        return Math.max(0, tax)
    }

    const calculateTaxSavings = (taxableIncome: number, age: number): number => {
        // Maximum savings under 80C, 80D etc.
        const section80C = Math.min(150000, taxableIncome * 0.1)
        const section80D = age >= 60 ? 50000 : 25000
        return section80C + section80D
    }

    const handleCalculate = async () => {
        const validationErrors = validateInput()
        setErrors(validationErrors)

        if (validationErrors.length > 0) {
            setAnnouncement(`Please fix ${validationErrors.length} error(s) in the form`)
            return
        }

        setIsCalculating(true)
        setAnnouncement('Calculating salary breakdown...')

        // Simulate API call delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800))

        try {
            const result = calculateAdvancedBreakdown(input)
            setBreakdown(result)
            setAnnouncement(`Salary breakdown calculated. Your take-home salary is ₹${result.netSalary.toLocaleString('en-IN')}`)
        } catch (error) {
            setAnnouncement('An error occurred while calculating. Please try again.')
        } finally {
            setIsCalculating(false)
        }
    }

    const getFieldError = (field: string) => errors.find(e => e.field === field)

    const savingsOpportunities = useMemo(() => {
        if (!breakdown) return []

        const opportunities = []

        if (breakdown.taxSavings && breakdown.taxSavings > 1000) {
            opportunities.push({
                type: 'Tax Savings',
                amount: breakdown.taxSavings,
                description: 'Invest in 80C instruments to save tax'
            })
        }

        if (breakdown.takeHomePercentage < 75) {
            opportunities.push({
                type: 'Salary Structure',
                amount: breakdown.grossSalary * 0.05,
                description: 'Optimize salary structure for better take-home'
            })
        }

        return opportunities
    }, [breakdown])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <LiveRegion message={announcement} />

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Advanced Salary Calculator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get detailed insights into your salary structure with tax optimizations and savings opportunities
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Calculator className="mr-3 h-6 w-6 text-primary-600" />
                            Salary Information
                        </h2>

                        <div className="space-y-6">
                            {/* Gross Salary */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Monthly Gross Salary (₹)
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={input.grossSalary}
                                        onChange={(e) => setInput(prev => ({ ...prev, grossSalary: e.target.value }))}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${getFieldError('grossSalary') ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your monthly gross salary"
                                        aria-describedby={getFieldError('grossSalary') ? 'gross-salary-error' : undefined}
                                    />
                                </div>
                                {getFieldError('grossSalary') && (
                                    <p id="gross-salary-error" className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {getFieldError('grossSalary')?.message}
                                    </p>
                                )}
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    City Type
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['metro', 'non-metro'].map((city) => (
                                        <label key={city} className="relative flex cursor-pointer">
                                            <input
                                                type="radio"
                                                value={city}
                                                checked={input.city === city}
                                                onChange={(e) => setInput(prev => ({ ...prev, city: e.target.value as 'metro' | 'non-metro' }))}
                                                className="sr-only"
                                            />
                                            <div className={`flex-1 p-3 border-2 rounded-lg text-center transition-all ${input.city === city
                                                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                                                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400'
                                                }`}>
                                                {city === 'metro' ? 'Metro City' : 'Non-Metro City'}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    value={input.age}
                                    onChange={(e) => setInput(prev => ({ ...prev, age: e.target.value }))}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${getFieldError('age') ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your age"
                                    min="18"
                                    max="70"
                                    aria-describedby={getFieldError('age') ? 'age-error' : undefined}
                                />
                                {getFieldError('age') && (
                                    <p id="age-error" className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {getFieldError('age')?.message}
                                    </p>
                                )}
                            </div>

                            {/* Insurance */}
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    id="insurance"
                                    checked={input.hasInsurance}
                                    onChange={(e) => setInput(prev => ({ ...prev, hasInsurance: e.target.checked }))}
                                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="insurance" className="text-sm text-gray-700 dark:text-gray-300">
                                    I have health insurance coverage
                                </label>
                            </div>

                            {/* Calculate Button */}
                            <motion.button
                                onClick={handleCalculate}
                                disabled={isCalculating}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {isCalculating ? (
                                    <LoadingSpinner size="sm" />
                                ) : (
                                    <>
                                        <TrendingUp className="w-5 h-5" />
                                        <span>Calculate Breakdown</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <AnimatePresence mode="wait">
                        {breakdown && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                {/* Summary Card */}
                                <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                                        <CheckCircle className="mr-2 h-6 w-6" />
                                        Your Take-Home Salary
                                    </h3>
                                    <div className="text-3xl font-bold mb-2">
                                        ₹{breakdown.netSalary.toLocaleString('en-IN')}
                                    </div>
                                    <div className="text-blue-100">
                                        {breakdown.takeHomePercentage.toFixed(1)}% of gross salary
                                    </div>
                                </div>

                                {/* Breakdown Details */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        Detailed Breakdown
                                    </h3>

                                    <div className="space-y-3">
                                        {[
                                            { label: 'Basic Salary', value: breakdown.basicSalary, positive: true },
                                            { label: 'House Rent Allowance', value: breakdown.hra, positive: true },
                                            { label: 'Other Allowances', value: breakdown.allowances, positive: true },
                                            { label: 'Provident Fund', value: breakdown.providentFund, positive: false },
                                            { label: 'Professional Tax', value: breakdown.professionalTax, positive: false },
                                            { label: 'Income Tax', value: breakdown.incomeTax, positive: false },
                                            { label: 'Other Deductions', value: breakdown.otherDeductions, positive: false },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                                            >
                                                <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                                                <span className={`font-semibold ${item.positive
                                                        ? 'text-green-600 dark:text-green-400'
                                                        : 'text-red-600 dark:text-red-400'
                                                    }`}>
                                                    {item.positive ? '+' : '-'}₹{Math.abs(item.value).toLocaleString('en-IN')}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Savings Opportunities */}
                                {savingsOpportunities.length > 0 && (
                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                                            <Info className="mr-2 h-5 w-5" />
                                            Savings Opportunities
                                        </h3>
                                        <div className="space-y-3">
                                            {savingsOpportunities.map((opportunity, index) => (
                                                <div key={index} className="flex justify-between items-center">
                                                    <div>
                                                        <div className="font-medium text-yellow-800 dark:text-yellow-200">
                                                            {opportunity.type}
                                                        </div>
                                                        <div className="text-sm text-yellow-600 dark:text-yellow-300">
                                                            {opportunity.description}
                                                        </div>
                                                    </div>
                                                    <div className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                                                        ₹{opportunity.amount.toLocaleString('en-IN')}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
