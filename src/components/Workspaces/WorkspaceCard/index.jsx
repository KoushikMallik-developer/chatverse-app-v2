import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveWorkspace } from '../../../store/slices/workspaceSlice.js'

const WorkspaceCard = ({ workspace, onEdit, onDelete }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleGoToWorkspace = (workspace) => {
        dispatch(setActiveWorkspace(workspace))
        navigate(`/workspace/${workspace._id}`)
    }

    const handleClickOutside = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6 hover:border-neutral-600 transition-colors">
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-neutral-700 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                    {workspace.name.split(' ').length > 1
                        ? `${workspace.name.split(' ')[0].charAt(0).toUpperCase()} ${workspace.name.split(' ')[1].charAt(0).toUpperCase()}`
                        : workspace.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">
                        {workspace.name}
                    </h3>
                    <p className="text-neutral-400">
                        {workspace?.members.length} members
                    </p>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <div className="flex items-center text-neutral-300">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                    </svg>
                    <span>{workspace?.channels?.length} channels</span>
                </div>
                <div className="flex items-center text-neutral-300">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    <span>100 messages today</span>
                </div>
            </div>
            <div className="mt-6 flex space-x-2">
                <button
                    className="flex-1 px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                    onClick={() => {
                        handleGoToWorkspace(workspace)
                    }}
                >
                    Open
                </button>
                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={handleClickOutside}
                            />
                            <div className="absolute sm:bottom-full right-0 mt-2 w-52 bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 z-20">
                                <button
                                    onClick={() => {
                                        onEdit()
                                        setIsMenuOpen(false)
                                    }}
                                    className="w-full text-left px-4 py-2 text-neutral-300 hover:bg-neutral-700 rounded-t-lg flex items-center"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Edit Workspace
                                </button>
                                <button
                                    onClick={() => {
                                        onDelete()
                                        setIsMenuOpen(false)
                                    }}
                                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-neutral-700 rounded-b-lg flex items-center"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Delete Workspace
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkspaceCard
