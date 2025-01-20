// About Page Component
export const AboutPage = () => {
    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Co-founder',
            image: '/api/placeholder/150/150',
        },
        {
            name: 'Michael Chen',
            role: 'CTO & Co-founder',
            image: '/api/placeholder/150/150',
        },
        {
            name: 'Emma Williams',
            role: 'Head of Design',
            image: '/api/placeholder/150/150',
        },
        {
            name: 'David Kim',
            role: 'Head of Engineering',
            image: '/api/placeholder/150/150',
        },
    ]

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Building the future of communication, one message at a
                        time.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Our Mission
                            </h2>
                            <p className="text-neutral-300 mb-4">
                                At ChatVerse, we believe in the power of
                                seamless communication. Our mission is to break
                                down barriers and connect people across the
                                digital universe, making collaboration
                                effortless and enjoyable.
                            </p>
                            <p className="text-neutral-300">
                                Founded in 2023, we've grown from a small
                                startup to a platform serving millions of users
                                worldwide, while maintaining our core values of
                                security, simplicity, and innovation.
                            </p>
                        </div>
                        <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                            <img
                                src="/api/placeholder/600/400"
                                alt="ChatVerse office"
                                className="rounded-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-4 bg-neutral-800/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Meet Our Team
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-neutral-300">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
