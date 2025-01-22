import React, { useState } from 'react'
import { Info, Search } from 'lucide-react'
import ChannelDetailsModal from '../../Modals/Channel/ChannelDetailsModal/index.jsx'
import ChannelSettingsModal from '../../Modals/Channel/ChannelSettingsModal/index.jsx'
import DeleteChannelModal from '../../Modals/Channel/DeleteChannelModal/index.jsx'

const ChatHeader = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuButtonRef,
    channelData,
}) => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const handleAddMember = (email) => {
        console.log('Adding member:', email)
        // Implement member addition logic
    }

    const handleUpdateChannel = (updates) => {
        console.log('Updating channel:', updates)
        // Implement channel update logic
    }

    const handleDeleteChannel = () => {
        console.log('Deleting channel')
        // Implement channel deletion logic
    }
    return (
        <header className="bg-neutral-800 border-b border-neutral-700 p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        {!isMobileMenuOpen && (
                            <button
                                className={`lg:hidden top-4 left-4 p-2 rounded-md text-neutral-300 hover:bg-neutral-700 transition-opacity duration-300 `}
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
                        )}{' '}
                        {/* Added left padding */}
                        <span className="text-neutral-400 mr-2">#</span>
                        <h1 className="text-lg font-semibold text-white">
                            {channelData.name}
                        </h1>
                    </div>
                    <button
                        onClick={() => setIsDetailsModalOpen(true)}
                        className="ml-4 text-neutral-400 hover:text-white"
                    >
                        <Info className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    <div className="relative max-w-xs w-full sm:max-w-md">
                        <input
                            type="text"
                            placeholder="Search messages"
                            className="w-full px-4 py-1 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="w-4 h-4 absolute right-3 top-2.5 text-neutral-400" />
                    </div>
                </div>
            </div>
            {/* Modals */}
            <ChannelDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                channelData={channelData}
                onAddMember={handleAddMember}
                onOpenSettings={() => {
                    setIsSettingsModalOpen(true)
                    setIsDetailsModalOpen(false)
                }}
            />

            <ChannelSettingsModal
                isOpen={isSettingsModalOpen}
                onClose={() => setIsSettingsModalOpen(false)}
                channelData={channelData}
                onUpdate={handleUpdateChannel}
                onDelete={() => setIsDeleteModalOpen(true)}
            />

            <DeleteChannelModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteChannel}
            />
        </header>
    )
}
export default ChatHeader
