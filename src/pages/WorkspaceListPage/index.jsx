import React, { useEffect, useState } from 'react'
import EditWorkspaceModal from '../../components/Modals/Workspace/EditWorkspaceModal/index.jsx'
import DeleteWorkspaceModal from '../../components/Modals/Workspace/DeleteWorkspaceModal/index.jsx'
import CreateWorkspaceModal from '../../components/Modals/Workspace/AddWorkspaceModal/index.jsx'
import WorkspaceCard from '../../components/Workspaces/WorkspaceCard/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../store/slices/authSlice.js'
import {
    fetchWorkspaces,
    setActiveWorkspace,
} from '../../store/slices/workspaceSlice.js'

const WorkspaceListPage = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const { token } = useSelector((state) => state.auth)
    const { workspaces } = useSelector((state) => state.workspace)

    const dispatch = useDispatch()

    const handleEdit = (workspace) => {
        console.log(workspace.name)
        dispatch(setActiveWorkspace(workspace))
        setIsEditModalOpen(true)
    }

    const handleDelete = (workspace) => {
        dispatch(setActiveWorkspace(workspace))
        setIsDeleteModalOpen(true)
    }

    useEffect(() => {
        dispatch(getUserDetails())
        dispatch(fetchWorkspaces())
    }, [token, dispatch])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-screen bg-neutral-900 flex flex-col">
                <div className="flex justify-between items-center px-6 pt-6 space-x-4">
                    <h2 className="text-white text-xl font-semibold ">
                        Workspaces
                    </h2>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-between "
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <span className="ml-0">New Workspace</span>
                    </button>
                </div>
                <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workspaces.map((workspace, index) => (
                            <WorkspaceCard
                                key={index}
                                workspace={workspace}
                                onEdit={() => handleEdit(workspace)}
                                onDelete={() => handleDelete(workspace)}
                            />
                        ))}
                    </div>
                </div>

                {isCreateModalOpen && (
                    <CreateWorkspaceModal
                        isOpen={isCreateModalOpen}
                        onClose={() => setIsCreateModalOpen(false)}
                    />
                )}
                {isEditModalOpen && (
                    <EditWorkspaceModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                    />
                )}
                {isDeleteModalOpen && (
                    <DeleteWorkspaceModal
                        isOpen={isDeleteModalOpen}
                        onClose={() => setIsDeleteModalOpen(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default WorkspaceListPage
