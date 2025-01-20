import React from 'react'
import {
    MessageCircle,
    Shield,
    Zap,
    Globe,
    Video,
    Cloud,
    Users,
    Lock,
    Mail,
    Phone,
    MapPin,
    GitBranch,
    Bell,
    Search,
    Settings,
    Share2,
    Headphones,
    Code,
    Database,
    Clock,
    Check,
} from 'lucide-react'
// Detailed Pricing Page Component
export const PricingPage = () => {
    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            billing: 'forever',
            features: [
                'Up to 10 team members',
                '5GB storage',
                'Basic chat features',
                'Limited message history',
                'Email support',
                '2 group channels',
            ],
            recommended: false,
        },
        {
            name: 'Pro',
            price: '$9.99',
            billing: 'per user/month',
            features: [
                'Unlimited team members',
                '50GB storage',
                'Advanced chat features',
                'Unlimited history',
                'Priority support',
                'Unlimited channels',
                'Video calls',
                'Screen sharing',
                'Custom integrations',
            ],
            recommended: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            billing: 'contact sales',
            features: [
                'Everything in Pro',
                'Unlimited storage',
                '24/7 phone support',
                'Dedicated account manager',
                'Custom security features',
                'API access',
                'Advanced analytics',
                'SLA guarantees',
                'Custom branding',
            ],
            recommended: false,
        },
    ]

    const comparisons = [
        {
            category: 'Core Features',
            features: [
                {
                    name: 'Team members',
                    basic: 'Up to 10',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                },
                {
                    name: 'Storage',
                    basic: '5GB',
                    pro: '50GB',
                    enterprise: 'Unlimited',
                },
                {
                    name: 'Message history',
                    basic: '30 days',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                },
            ],
        },
        {
            category: 'Communication',
            features: [
                {
                    name: 'Group channels',
                    basic: '2',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                },
                {
                    name: 'Video calls',
                    basic: '❌',
                    pro: '✅',
                    enterprise: '✅',
                },
                {
                    name: 'Screen sharing',
                    basic: '❌',
                    pro: '✅',
                    enterprise: '✅',
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Choose the perfect plan for your team's communication
                        needs.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-neutral-800 p-8 rounded-lg border relative ${
                                    plan.recommended
                                        ? 'border-blue-500'
                                        : 'border-neutral-700'
                                }`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-sm px-4 py-1 rounded-full">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">
                                    {plan.name}
                                </h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">
                                        {plan.price}
                                    </span>
                                    <span className="text-neutral-400 ml-2">
                                        /{plan.billing}
                                    </span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                                            <span className="text-neutral-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                                        plan.recommended
                                            ? 'bg-blue-600 hover:bg-blue-700'
                                            : 'border border-neutral-700 hover:border-neutral-600'
                                    }`}
                                >
                                    {plan.name === 'Enterprise'
                                        ? 'Contact Sales'
                                        : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Comparison */}
            <div className="py-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Feature Comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-700">
                                    <th className="py-4 px-6 text-left">
                                        Features
                                    </th>
                                    <th className="py-4 px-6 text-center">
                                        Basic
                                    </th>
                                    <th className="py-4 px-6 text-center">
                                        Pro
                                    </th>
                                    <th className="py-4 px-6 text-center">
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((category, index) => (
                                    <React.Fragment key={index}>
                                        <tr className="bg-neutral-800/50">
                                            <td
                                                colSpan="4"
                                                className="py-4 px-6 font-semibold"
                                            >
                                                {category.category}
                                            </td>
                                        </tr>
                                        {category.features.map((feature, i) => (
                                            <tr
                                                key={i}
                                                className="border-b border-neutral-700"
                                            >
                                                <td className="py-4 px-6">
                                                    {feature.name}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {feature.basic}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {feature.pro}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {feature.enterprise}
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: 'How do I change my plan?',
                                answer: 'You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.',
                            },
                            {
                                question: 'What payment methods do you accept?',
                                answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
                            },
                            {
                                question: 'Can I cancel my subscription?',
                                answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
                            },
                            {
                                question: 'Do you offer refunds?',
                                answer: 'We offer a 30-day money-back guarantee for all paid plans. Enterprise plans are handled on a case-by-case basis.',
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 p-6 rounded-lg border border-neutral-700"
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-neutral-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-4 bg-neutral-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-neutral-300 mb-8">
                        Join thousands of teams already using ChatVerse to
                        improve their communication.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition-colors">
                            Start Free Trial
                        </button>
                        <button className="border border-neutral-700 hover:border-neutral-600 px-8 py-4 rounded-lg font-medium transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
