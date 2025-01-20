import React from 'react'
import { Shield, Zap, Globe, Star } from 'lucide-react'

const HomePage = () => {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Connect Across the{' '}
                        <span className="text-blue-500">Universe</span>
                    </h1>
                    <p className="text-neutral-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                        Experience real-time messaging like never before with
                        ChatVerse. Secure, fast, and built for modern
                        communication.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                            Start Chatting Free
                        </button>
                        <button className="border border-neutral-700 hover:border-neutral-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-20 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Why Choose ChatVerse?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <Shield className="h-8 w-8 text-blue-500" />
                                ),
                                title: 'End-to-End Encryption',
                                description:
                                    'Your conversations are protected with military-grade encryption.',
                            },
                            {
                                icon: <Zap className="h-8 w-8 text-blue-500" />,
                                title: 'Lightning Fast',
                                description:
                                    'Experience real-time messaging with minimal latency.',
                            },
                            {
                                icon: (
                                    <Globe className="h-8 w-8 text-blue-500" />
                                ),
                                title: 'Cross-Platform',
                                description:
                                    'Chat seamlessly across all your devices.',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 p-6 rounded-lg border border-neutral-700"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Simple, Transparent Pricing
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Basic',
                                price: 'Free',
                                features: [
                                    'Up to 10 members',
                                    'Basic chat features',
                                    '1GB storage',
                                    'Email support',
                                ],
                            },
                            {
                                name: 'Pro',
                                price: '$9.99/mo',
                                features: [
                                    'Unlimited members',
                                    'Video calls',
                                    '10GB storage',
                                    'Priority support',
                                ],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                features: [
                                    'Custom features',
                                    'Unlimited storage',
                                    '24/7 support',
                                    'API access',
                                ],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-neutral-800 p-8 rounded-lg border ${plan.popular ? 'border-blue-500' : 'border-neutral-700'} relative`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-blue-500 text-sm px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                        Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-3xl font-bold mb-6">
                                    {plan.price}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center"
                                        >
                                            <Star className="h-5 w-5 text-blue-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-lg transition-colors ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border border-neutral-700 hover:border-neutral-600'}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div id="about" className="py-20 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { number: '10M+', label: 'Users' },
                            { number: '150+', label: 'Countries' },
                            { number: '99.9%', label: 'Uptime' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold text-blue-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-neutral-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Join the ChatVerse?
                    </h2>
                    <p className="text-neutral-300 text-xl mb-8">
                        Start chatting with friends, family, and colleagues
                        today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                            Create Free Account
                        </button>
                        <button className="border border-neutral-700 hover:border-neutral-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
