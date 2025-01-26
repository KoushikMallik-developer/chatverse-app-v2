import React, { useState } from 'react'
import {
    resetSearchedUsers,
    searchAllUsers,
    searchWorkspaceUsers,
} from '../../../../store/slices/authSlice.js'
import NameToAvatar from '../../../../utils/name_to_avatar.jsx'
import { addMemberToWorkspace } from '../../../../store/slices/workspaceSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const AddUserWorkspaceModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const { currentWorkspace } = useSelector((state) => state.workspace)
    const { searchedUsers } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    let debounceTimer

    const handleAddUser = (userId) => {
        // Handle adding user logic here
        console.log('Adding user:', userId)
        dispatch(
            addMemberToWorkspace({
                workspaceId: currentWorkspace._id,
                members: [userId],
            })
        )
    }

    const handleSearch = (query) => {
        setSearchQuery(query)

        clearTimeout(debounceTimer)

        debounceTimer = setTimeout(() => {
            dispatch(
                searchAllUsers({
                    query: searchQuery,
                })
            )
        }, 700)
    }
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md border border-neutral-700">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">
                        Add People to Workspace
                    </h2>
                    <button
                        onClick={() => {
                            onClose()
                            dispatch(resetSearchedUsers())
                        }}
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
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search people..."
                        className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                    />
                    <div className="max-h-60 overflow-y-auto space-y-2">
                        {searchedUsers?.map((user) => (
                            <div
                                key={user._id}
                                className="flex items-center justify-between p-2 hover:bg-neutral-700 rounded-lg transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <NameToAvatar
                                        key={user._id}
                                        name={user.name}
                                        size={40}
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
                                    onClick={() => handleAddUser(user._id)}
                                    className="px-3 py-1 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                                >
                                    Send Invitation
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserWorkspaceModal
