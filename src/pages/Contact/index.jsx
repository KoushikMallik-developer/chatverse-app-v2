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
// Contact Page Component
export const ContactPage = () => {
    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: 'Email',
            info: 'support@chatverse.com',
            link: 'mailto:support@chatverse.com',
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: 'Phone',
            info: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: 'Location',
            info: '123 Tech Street, San Francisco, CA 94105',
            link: '#',
        },
    ]

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Have questions? We're here to help you get started.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <div className="text-blue-500 mt-1">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold mb-1">
                                                {item.title}
                                            </h3>
                                            <a
                                                href={item.link}
                                                className="text-neutral-300 hover:text-white transition-colors"
                                            >
                                                {item.info}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
