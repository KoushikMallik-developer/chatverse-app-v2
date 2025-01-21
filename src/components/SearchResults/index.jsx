import React from 'react'

const SearchResults = ({ onBackClick }) => {
    const filters = [
        { label: 'From: @anyone' },
        { label: 'In: #general' },
        { label: 'Has: files' },
        { label: 'During: Today' },
    ]

    const searchResults = [
        {
            id: 1,
            user: 'John Doe',
            channel: 'general',
            time: 'Today at 10:30 AM',
            content:
                "Hey team, I've just updated the documentation for the new feature.",
            highlightWord: 'updated',
        },
        {
            id: 2,
            user: 'Jane Smith',
            channel: 'development',
            time: 'Yesterday at 2:15 PM',
            content: 'The new search functionality is now live on staging.',
            highlightWord: 'search',
            reactions: [
                { emoji: '👍', count: 3 },
                { emoji: '🚀', count: 2 },
            ],
        },
        {
            id: 3,
            user: 'Mike Johnson',
            channel: 'design',
            time: '2 days ago',
            content: "Here's the latest design mockup",
            highlightWord: 'design',
            file: {
                name: 'mockup-v2.fig',
                icon: (
                    <svg
                        className="w-5 h-5 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                ),
            },
        },
    ]

    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 pt-4">
                <button
                    onClick={onBackClick}
                    className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <span>Back to Chat</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto p-4 md:p-6">
                    {/* Search Filters */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm hover:bg-neutral-700 transition-colors"
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="text-neutral-400 text-sm mb-6">
                        Showing 24 results
                    </div>

                    {/* Search Results */}
                    <div className="space-y-4 md:space-y-6">
                        {searchResults.map((result) => (
                            <div
                                key={result.id}
                                className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-750 transition-colors border border-neutral-700"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/api/placeholder/32/32"
                                            alt={`${result.user} Avatar`}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="font-medium text-white">
                                            {result.user}
                                        </span>
                                        <span className="text-neutral-400">
                                            in #{result.channel}
                                        </span>
                                    </div>
                                    <span className="text-sm text-neutral-400">
                                        {result.time}
                                    </span>
                                </div>

                                <p className="text-neutral-300">
                                    {result.content
                                        .split(result.highlightWord)
                                        .map((part, index, array) => (
                                            <React.Fragment key={index}>
                                                {part}
                                                {index < array.length - 1 && (
                                                    <span className="bg-yellow-500/20 text-yellow-200 px-1 rounded">
                                                        {result.highlightWord}
                                                    </span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                </p>

                                {/* Reactions */}
                                {result.reactions && (
                                    <div className="mt-2 flex gap-2">
                                        {result.reactions.map(
                                            (reaction, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-neutral-700 text-neutral-300 px-2 py-1 rounded-full text-sm"
                                                >
                                                    {reaction.emoji}{' '}
                                                    {reaction.count}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )}

                                {/* File Attachment */}
                                {result.file && (
                                    <div className="mt-2 flex items-center space-x-2 bg-neutral-700 p-2 rounded-lg">
                                        {result.file.icon}
                                        <span className="text-neutral-300">
                                            {result.file.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-6 text-center">
                        <button className="px-6 py-2 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors">
                            Load More Results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
