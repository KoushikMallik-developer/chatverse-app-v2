import React, { useState } from 'react'

const AddUserChannelModal = ({ isOpen, onClose, channelName = 'general' }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [users] = useState([
        {
            id: 1,
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            avatar: '/api/placeholder/32/32',
        },
        {
            id: 2,
            name: 'Mike Johnson',
            email: 'mike@example.com',
            avatar: '/api/placeholder/32/32',
        },
    ])

    const handleAddUser = (userId) => {
        // Handle adding user logic here
        console.log('Adding user:', userId)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md border border-neutral-700">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">{`Add People to #${channelName}`}</h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white transition-colors"
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
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search people..."
                        className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                    />
                    <div className="max-h-60 overflow-y-auto space-y-2">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between p-2 hover:bg-neutral-700 rounded-lg transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <div>
                                        <p className="text-white">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-neutral-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleAddUser(user.id)}
                                    className="px-3 py-1 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                                >
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserChannelModal
