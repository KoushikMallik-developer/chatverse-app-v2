import React, { useState } from 'react'

const AddUserWorkspaceModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle invitation logic here
        console.log('Sending invitations to:', email)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md border border-neutral-700">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">
                        Add People to Workspace
                    </h2>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email addresses..."
                        className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                    />
                    <div className="flex items-center space-x-2 text-sm text-neutral-400">
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
                        <span>Separate multiple emails with commas</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Send Invitations
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddUserWorkspaceModal
