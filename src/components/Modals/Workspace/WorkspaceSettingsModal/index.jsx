import React, { useState } from 'react'

const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText,
    confirmButtonClass,
}) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
            <div className="bg-neutral-800 rounded-lg p-4 sm:p-6 w-full max-w-md border border-neutral-700 mx-2 sm:mx-0">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6">
                    {message}
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 sm:justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors w-full sm:w-auto"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 rounded-lg text-white transition-colors w-full sm:w-auto ${confirmButtonClass}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}

const WorkspaceSettingsModal = ({
    isOpen,
    onClose,
    workspace,
    isOwner,
    setIsAddMemberToWorkspaceModalOpen,
}) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [showLeaveConfirmation, setShowLeaveConfirmation] = useState(false)
    const [settings, setSettings] = useState({
        name: workspace?.name || '',
        description: workspace?.description || '',
    })
    const [members] = useState([
        {
            id: 1,
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            role: 'Owner',
        },
        {
            id: 2,
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'Member',
        },
        {
            id: 3,
            name: 'Alex Thompson',
            email: 'alex@example.com',
            role: 'Member',
        },
    ])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSettings((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {
        console.log('Saving workspace settings:', settings)
        onClose()
    }

    const handleDeleteWorkspace = () => {
        console.log('Deleting workspace')
        setShowDeleteConfirmation(false)
        onClose()
    }

    const handleLeaveWorkspace = () => {
        console.log('Leaving workspace')
        setShowLeaveConfirmation(false)
        onClose()
    }

    const handleRemoveMember = (memberId) => {
        console.log('Removing member:', memberId)
    }

    if (!isOpen) return null

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto z-50">
                <div className="bg-neutral-800 rounded-none sm:rounded-lg w-full sm:max-w-2xl border-0 sm:border border-neutral-700 min-h-screen sm:min-h-0 sm:max-h-[90vh] flex flex-col my-0 sm:my-4">
                    {/* Header */}
                    <div className="sticky top-0 z-10 bg-neutral-800 flex justify-between items-center p-4 sm:p-6 border-b border-neutral-700">
                        <h2 className="text-lg sm:text-xl font-bold text-white">
                            Workspace Settings
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-neutral-400 hover:text-white transition-colors p-1"
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
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

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                        <div className="space-y-6">
                            {/* Basic Settings */}
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
                                    Basic Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-1 sm:mb-2">
                                            Workspace Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={settings.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-1 sm:mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={settings.description}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="w-full px-3 sm:px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 resize-none text-sm sm:text-base"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Members */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                                    <h3 className="text-base sm:text-lg font-medium text-white">
                                        Members
                                    </h3>
                                    <button
                                        className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
                                        onClick={() =>
                                            setIsAddMemberToWorkspaceModalOpen(
                                                true
                                            )
                                        }
                                    >
                                        Add Members
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {members.map((member) => (
                                        <div
                                            key={member.id}
                                            className="flex items-center justify-between p-2 sm:p-3 bg-neutral-700 rounded-lg flex-wrap sm:flex-nowrap gap-2"
                                        >
                                            <div className="flex items-center space-x-3 min-w-0">
                                                <img
                                                    src="/api/placeholder/32/32"
                                                    alt={member.name}
                                                    className="w-8 h-8 rounded-full flex-shrink-0"
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-white text-sm sm:text-base truncate">
                                                        {member.name}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-neutral-400 truncate">
                                                        {member.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 flex-shrink-0">
                                                <span className="text-xs sm:text-sm text-neutral-400">
                                                    {member.role}
                                                </span>
                                                {isOwner &&
                                                    member.role !== 'Owner' && (
                                                        <button
                                                            onClick={() =>
                                                                handleRemoveMember(
                                                                    member.id
                                                                )
                                                            }
                                                            className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-red-500 mb-3 sm:mb-4">
                                    Danger Zone
                                </h3>
                                {isOwner ? (
                                    <button
                                        onClick={() =>
                                            setShowDeleteConfirmation(true)
                                        }
                                        className="w-full px-4 py-2 bg-red-600 text-white text-sm sm:text-base rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        Delete Workspace
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            setShowLeaveConfirmation(true)
                                        }
                                        className="w-full px-4 py-2 bg-red-600 text-white text-sm sm:text-base rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        Leave Workspace
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 bg-neutral-800 p-4 sm:p-6 border-t border-neutral-700">
                        <div className="flex justify-end">
                            <button
                                onClick={handleSave}
                                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmationModal
                isOpen={showDeleteConfirmation}
                onClose={() => setShowDeleteConfirmation(false)}
                onConfirm={handleDeleteWorkspace}
                title="Delete Workspace"
                message="Are you sure you want to delete this workspace? This action cannot be undone and all workspace data will be permanently lost."
                confirmText="Delete Workspace"
                confirmButtonClass="bg-red-600 hover:bg-red-700"
            />

            <ConfirmationModal
                isOpen={showLeaveConfirmation}
                onClose={() => setShowLeaveConfirmation(false)}
                onConfirm={handleLeaveWorkspace}
                title="Leave Workspace"
                message="Are you sure you want to leave this workspace? You'll lose access to all workspace channels and content."
                confirmText="Leave Workspace"
                confirmButtonClass="bg-red-600 hover:bg-red-700"
            />
        </>
    )
}

export default WorkspaceSettingsModal
