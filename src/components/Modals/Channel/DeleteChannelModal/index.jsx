import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteChannelModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-red-500">
                        <Trash2 className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Delete Channel</h2>
                    </div>
                    <p className="text-neutral-300">
                        Are you sure you want to delete this channel? This
                        action cannot be undone and all messages will be
                        permanently deleted.
                    </p>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onConfirm()
                                onClose()
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Delete Channel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteChannelModal
