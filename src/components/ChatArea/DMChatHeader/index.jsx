import React, { useState } from 'react'

const DMChatHeader = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const userDetails = {
        name: 'Jane Smith',
        status: 'Online',
        avatar: '/api/placeholder/32/32',
    }
    return (
        <header className="bg-neutral-800 border-b border-neutral-700 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img
                        src={userDetails.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <h1 className="text-lg font-semibold text-white">
                            {userDetails.name}
                        </h1>
                        <span className="text-sm text-green-500">
                            {userDetails.status}
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search in conversation"
                            className="w-64 px-4 py-2 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg
                            className="w-5 h-5 absolute right-3 top-2.5 text-neutral-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <button className="text-neutral-400 hover:text-white">
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
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default DMChatHeader
