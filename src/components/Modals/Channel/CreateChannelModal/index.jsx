import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createChannel } from '../../../../store/slices/channelSlice.js'

const CreateChannelModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('Public')

    const { currentWorkspace } = useSelector((state) => state.workspace)

    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(
            createChannel({
                name: name,
                description: description,
                type: type,
                workspaceId: currentWorkspace._id,
            })
        )
        onClose()
    }
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Create Channel
                </h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Channel Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            value={description}
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
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
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateChannelModal
