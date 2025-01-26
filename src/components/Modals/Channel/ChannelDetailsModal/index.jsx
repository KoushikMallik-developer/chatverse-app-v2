import React, { useState } from 'react'
import { Settings, UserPlus, X, Trash2 } from 'lucide-react'
import AddUserToChannelModal from '../AddUserToChannelModal/index.jsx'
import { useSelector, useDispatch } from 'react-redux'
import NameToAvatar from '../../../../utils/name_to_avatar.jsx'
import { removeMemberFromChannel } from '../../../../store/slices/channelSlice.js'

const ChannelDetailsModal = ({ isOpen, onClose, onOpenSettings }) => {
    const [showAllMembers, setShowAllMembers] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)

    const { currentChannel } = useSelector((state) => state.channel)
    const dispatch = useDispatch()

    const handleRemoveMember = (memberId) => {
        dispatch(
            removeMemberFromChannel({
                channelId: currentChannel._id,
                userId: memberId,
            })
        )
    }

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
                        <p className="text-white"># {currentChannel.name}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-neutral-300 mb-2">
                            Description
                        </h3>
                        <p className="text-white">
                            {currentChannel.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-neutral-300 mb-2">
                            Type
                        </h3>
                        <p className="text-white">
                            {currentChannel.type.toString().toUpperCase()}
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-neutral-300">
                                Members ({currentChannel.members.length})
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
                            {currentChannel.members
                                .slice(0, 3)
                                .map((member) => (
                                    <div
                                        key={member._id}
                                        className="flex items-center space-x-3 justify-between w-full"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <NameToAvatar
                                                name={member.name}
                                                size={30}
                                            />
                                            <span className="text-white">
                                                {member.name}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleRemoveMember(member._id)
                                            }
                                            className="text-red-500 hover:text-red-400"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            {currentChannel.members.length > 3 && (
                                <div className="flex items-center space-x-1 text-white">
                                    <button
                                        onClick={() => setShowAllMembers(true)}
                                        className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center text-sm hover:bg-neutral-600"
                                    >
                                        +{currentChannel.members.length - 3}
                                    </button>{' '}
                                    <span>more</span>
                                </div>
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
                            {currentChannel.members.map((member) => (
                                <div
                                    key={member._id}
                                    className="flex items-center space-x-3 justify-between"
                                >
                                    <div className="flex items-center space-x-3">
                                        <NameToAvatar
                                            name={member.name}
                                            size={30}
                                        />
                                        <span className="text-white">
                                            {member.name}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleRemoveMember(member._id)
                                        }
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
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
