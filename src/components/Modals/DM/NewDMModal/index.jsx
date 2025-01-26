import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createDM } from '../../../../store/slices/dmSlice.js'

const NewDMModal = ({ isOpen, onClose }) => {
    const [selectedMember, setSelectedMember] = useState('')
    const { currentWorkspace } = useSelector((state) => state.workspace)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedMember) {
            dispatch(
                createDM({
                    workspaceId: currentWorkspace._id,
                    recipientId: selectedMember,
                })
            )
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Create New Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <select
                            value={selectedMember}
                            onChange={(e) => setSelectedMember(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Select a member
                            </option>
                            {currentWorkspace.members.map((member) => (
                                <option key={member._id} value={member._id}>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-neutral-600 text-white hover:bg-neutral-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Start DM
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewDMModal
