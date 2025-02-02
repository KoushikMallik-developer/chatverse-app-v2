import React, { useEffect, useState } from 'react'
import { Trash2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { updateChannel } from '../../../../store/slices/channelSlice.js'

const ChannelSettingsModal = ({ isOpen, onClose, onDelete }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { currentChannel } = useSelector((state) => state.channel)

    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(
            updateChannel({
                channelId: currentChannel._id,
                name: name,
                description: description,
            })
        )
    }

    useEffect(() => {
        setName(currentChannel.name)
        setDescription(currentChannel.description)
    }, [currentChannel._id])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">
                        Channel Settings
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-neutral-300 block mb-2">
                            Channel Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-neutral-300 block mb-2">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            className="w-full px-4 py-2 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>
                    <div className="flex justify-between pt-4">
                        <button
                            onClick={() => {
                                onDelete()
                                onClose()
                            }}
                            className="px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Channel</span>
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelSettingsModal
