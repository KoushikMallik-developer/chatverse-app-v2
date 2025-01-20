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
} from 'lucide-react'

// Features Page Component
export const FeaturesPage = () => {
    const features = [
        {
            category: 'Communication',
            items: [
                {
                    icon: <MessageCircle className="h-6 w-6" />,
                    title: 'Real-time Messaging',
                    description:
                        'Instant message delivery with typing indicators and read receipts',
                },
                {
                    icon: <Video className="h-6 w-6" />,
                    title: 'HD Video Calls',
                    description:
                        'Crystal clear video conversations with up to 50 participants',
                },
                {
                    icon: <Share2 className="h-6 w-6" />,
                    title: 'File Sharing',
                    description:
                        'Share files up to 2GB with instant preview capabilities',
                },
            ],
        },
        {
            category: 'Security',
            items: [
                {
                    icon: <Shield className="h-6 w-6" />,
                    title: 'End-to-End Encryption',
                    description:
                        'Military-grade encryption for all messages and calls',
                },
                {
                    icon: <Lock className="h-6 w-6" />,
                    title: 'Two-Factor Authentication',
                    description:
                        'Extra security layer with multiple 2FA options',
                },
                {
                    icon: <Database className="h-6 w-6" />,
                    title: 'Secure Storage',
                    description:
                        'Encrypted cloud storage for all your shared content',
                },
            ],
        },
        {
            category: 'Organization',
            items: [
                {
                    icon: <Search className="h-6 w-6" />,
                    title: 'Advanced Search',
                    description:
                        'Find any message or file with powerful search capabilities',
                },
                {
                    icon: <Bell className="h-6 w-6" />,
                    title: 'Smart Notifications',
                    description:
                        'AI-powered notification management and priorities',
                },
                {
                    icon: <GitBranch className="h-6 w-6" />,
                    title: 'Thread Management',
                    description: 'Organize conversations with threaded replies',
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6">
                        Features that Empower
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-2xl">
                        Discover all the powerful features that make ChatVerse
                        the ultimate communication platform for teams and
                        individuals.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {features.map((category, index) => (
                        <div key={index} className="mb-20">
                            <h2 className="text-3xl font-bold mb-12">
                                {category.category}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {category.items.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-blue-500 transition-colors"
                                    >
                                        <div className="text-blue-500 mb-4">
                                            {feature.icon}
                                        </div>
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
                    ))}
                </div>
            </div>
        </div>
    )
}
