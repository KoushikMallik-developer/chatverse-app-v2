import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createWorkspace } from '../../../../store/slices/workspaceSlice.js'

const CreateWorkspaceModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        dispatch(createWorkspace({ name, description }))
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white"
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
                <h2 className="text-xl font-bold text-white mb-6">
                    Create New Workspace
                </h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                            placeholder="Workspace Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 resize-none h-24"
                            placeholder="Workspace Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-neutral-300 hover:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={handleSubmit}
                        >
                            Create Workspace
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateWorkspaceModal
