'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js'
import { Calculator, DollarSign, PieChart, Download } from 'lucide-react'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title)

interface SalaryBreakdown {
    grossSalary: number
    basicSalary: number
    hra: number
    allowances: number
    providentFund: number
    professionalTax: number
    incomeTax: number
    otherDeductions: number
    netSalary: number
}

export default function SalaryBreakdownPage() {
    const [grossSalary, setGrossSalary] = useState<string>('')
    const [breakdown, setBreakdown] = useState<SalaryBreakdown | null>(null)
    const [showResults, setShowResults] = useState(false)

    const calculateBreakdown = () => {
        const gross = parseFloat(grossSalary)
        if (!gross || gross <= 0) return

        // Standard salary breakdown calculations (Indian context)
        const basicSalary = gross * 0.4 // 40% of gross
        const hra = gross * 0.25 // 25% of gross
        const allowances = gross * 0.35 // 35% of gross

        // Deductions
        const providentFund = basicSalary * 0.12 // 12% of basic
        const professionalTax = Math.min(200, gross * 0.002) // Professional tax (max 200)
        const incomeTax = calculateIncomeTax(gross * 12) / 12 // Annual to monthly
        const otherDeductions = gross * 0.01 // 1% other deductions

        const netSalary = gross - providentFund - professionalTax - incomeTax - otherDeductions

        const calculatedBreakdown: SalaryBreakdown = {
            grossSalary: gross,
            basicSalary,
            hra,
            allowances,
            providentFund,
            professionalTax,
            incomeTax,
            otherDeductions,
            netSalary,
        }

        setBreakdown(calculatedBreakdown)
        setShowResults(true)
    }

    const calculateIncomeTax = (annualIncome: number): number => {
        // Simplified Indian tax calculation
        if (annualIncome <= 250000) return 0
        if (annualIncome <= 500000) return (annualIncome - 250000) * 0.05
        if (annualIncome <= 1000000) return 12500 + (annualIncome - 500000) * 0.2
        return 112500 + (annualIncome - 1000000) * 0.3
    }

    const chartData = breakdown ? {
        labels: [
            'Net Salary',
            'Provident Fund',
            'Professional Tax',
            'Income Tax',
            'Other Deductions'
        ],
        datasets: [{
            data: [
                breakdown.netSalary,
                breakdown.providentFund,
                breakdown.professionalTax,
                breakdown.incomeTax,
                breakdown.otherDeductions
            ],
            backgroundColor: [
                '#10B981', // Green
                '#3B82F6', // Blue
                '#F59E0B', // Yellow
                '#EF4444', // Red
                '#6B7280', // Gray
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    } : null

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    padding: 20,
                    usePointStyle: true,
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const label = context.label || ''
                        const value = context.formattedValue
                        const percentage = ((context.raw / breakdown!.grossSalary) * 100).toFixed(1)
                        return `${label}: ₹${value} (${percentage}%)`
                    }
                }
            }
        }
    }

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
                        <Calculator className="h-12 w-12 text-primary-600 mr-3" />
                        <h1 className="text-4xl font-bold text-gray-900">Salary Breakdown Calculator</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get a detailed breakdown of your salary structure, deductions, and net take-home pay with visual charts.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="card"
                    >
                        <div className="flex items-center mb-6">
                            <DollarSign className="h-6 w-6 text-primary-600 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">Enter Your Details</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="grossSalary" className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Gross Salary (₹)
                                </label>
                                <input
                                    type="number"
                                    id="grossSalary"
                                    value={grossSalary}
                                    onChange={(e) => setGrossSalary(e.target.value)}
                                    className="input-field text-lg"
                                    placeholder="Enter your monthly gross salary"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={calculateBreakdown}
                                disabled={!grossSalary || parseFloat(grossSalary) <= 0}
                                className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Calculate Breakdown
                            </motion.button>
                        </div>

                        {/* Quick Tips */}
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">💡 Quick Tips:</h3>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Gross salary includes basic pay, HRA, and allowances</li>
                                <li>• Calculations are based on standard Indian salary structures</li>
                                <li>• Tax calculations use current income tax slabs</li>
                                <li>• Results are estimates for reference purposes</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="card"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <PieChart className="h-6 w-6 text-primary-600 mr-2" />
                                <h2 className="text-2xl font-bold text-gray-900">Salary Breakdown</h2>
                            </div>
                            {breakdown && (
                                <button className="btn-secondary flex items-center">
                                    <Download className="h-4 w-4 mr-2" />
                                    Export
                                </button>
                            )}
                        </div>

                        {showResults && breakdown ? (
                            <div className="space-y-6">
                                {/* Summary Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-sm text-green-600 font-medium">Net Salary</p>
                                        <p className="text-2xl font-bold text-green-900">₹{breakdown.netSalary.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <p className="text-sm text-red-600 font-medium">Total Deductions</p>
                                        <p className="text-2xl font-bold text-red-900">
                                            ₹{(breakdown.grossSalary - breakdown.netSalary).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart */}
                                {chartData && (
                                    <div className="h-80">
                                        <Pie data={chartData} options={chartOptions} />
                                    </div>
                                )}

                                {/* Detailed Breakdown */}
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-gray-900">Detailed Breakdown</h3>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Basic Salary</span>
                                            <span className="font-medium">₹{breakdown.basicSalary.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">HRA</span>
                                            <span className="font-medium">₹{breakdown.hra.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Other Allowances</span>
                                            <span className="font-medium">₹{breakdown.allowances.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 font-semibold">
                                            <span>Gross Salary</span>
                                            <span>₹{breakdown.grossSalary.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                                            <span>Provident Fund (12%)</span>
                                            <span>-₹{breakdown.providentFund.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                                            <span>Professional Tax</span>
                                            <span>-₹{breakdown.professionalTax.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                                            <span>Income Tax</span>
                                            <span>-₹{breakdown.incomeTax.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                                            <span>Other Deductions</span>
                                            <span>-₹{breakdown.otherDeductions.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between py-3 font-bold text-lg text-green-600 border-t-2 border-green-200">
                                            <span>Net Take Home</span>
                                            <span>₹{breakdown.netSalary.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500">Enter your gross salary to see the breakdown</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
