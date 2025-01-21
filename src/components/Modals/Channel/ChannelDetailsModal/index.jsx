import React, { useState } from 'react'
import { Settings, UserPlus, X } from 'lucide-react'
import AddUserToChannelModal from '../AddUserToChannelModal/index.jsx'

const ChannelDetailsModal = ({
    isOpen,
    onClose,
    channelData,
    onAddMember,
    onOpenSettings,
}) => {
    const [showAllMembers, setShowAllMembers] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)
    const [newMemberEmail, setNewMemberEmail] = useState('')

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">
                        Channel Details
                    </h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={onOpenSettings}
                            className="text-neutral-400 hover:text-white"
                        >
                            <Settings className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onClose}
                            className="text-neutral-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-neutral-300 mb-2">
                            Channel Name
                        </h3>
                        <p className="text-white">#{channelData.name}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-neutral-300 mb-2">
                            Description
                        </h3>
                        <p className="text-white">{channelData.description}</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-neutral-300">
                                Members ({channelData.memberCount})
                            </h3>
                            <button
                                onClick={() => setShowAddMember(true)}
                                className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                            >
                                <UserPlus className="w-4 h-4" />
                                <span>Add Members</span>
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {channelData.members
                                .slice(0, 3)
                                .map((member, index) => (
                                    <img
                                        key={index}
                                        src="/api/placeholder/32/32"
                                        alt="Member Avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                ))}
                            {channelData.memberCount > 3 && (
                                <button
                                    onClick={() => setShowAllMembers(true)}
                                    className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center text-sm hover:bg-neutral-600"
                                >
                                    +{channelData.memberCount - 3}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* All Members Modal */}
            {showAllMembers && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">
                                All Members
                            </h2>
                            <button
                                onClick={() => setShowAllMembers(false)}
                                className="text-neutral-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {channelData.members.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                >
                                    <img
                                        src="/api/placeholder/32/32"
                                        alt="Member Avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-white">
                                        Member Name {index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Add Member Modal */}
            {showAddMember && (
                <AddUserToChannelModal
                    isOpen={showAddMember}
                    onClose={() => setShowAddMember(false)}
                />
            )}
        </div>
    )
}

export default ChannelDetailsModal
