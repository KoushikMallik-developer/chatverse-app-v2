import React, { useState } from 'react'
import { Search } from 'lucide-react'

const DMChatHeader = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuButtonRef,
}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const userDetails = {
        name: 'Jane Smith',
        status: 'Online',
        avatar: '/api/placeholder/32/32',
    }

    return (
        <header className="bg-neutral-800 border-b border-neutral-700 p-4">
            <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3 relative">
                    {!isMobileMenuOpen && (
                        <button
                            className={`lg:hidden top-4 left-4 p-1 rounded-md text-neutral-300 hover:bg-neutral-700 transition-opacity duration-300 `}
                            onClick={() => setIsMobileMenuOpen(true)}
                            ref={menuButtonRef}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    )}
                    <div className="relative">
                        <img
                            id="user_image"
                            src={userDetails.avatar}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-800 rounded-full"></div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-white">
                            {userDetails.name}
                        </h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    <div className="relative max-w-xs w-full sm:max-w-md">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-1 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="w-4 h-4 absolute right-3 top-2.5 text-neutral-400" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DMChatHeader
