import React, { useState } from 'react'
import EditWorkspaceModal from '../../components/Modals/Workspace/EditWorkspaceModal/index.jsx'
import DeleteWorkspaceModal from '../../components/Modals/Workspace/DeleteWorkspaceModal/index.jsx'
import CreateWorkspaceModal from '../../components/Modals/Workspace/AddWorkspaceModal/index.jsx'
import WorkspaceCard from '../../components/Workspaces/WorkspaceCard/index.jsx'

const WorkspaceListPage = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const workspaces = [
        {
            name: 'Tech Company',
            acronym: 'TC',
            members: 25,
            channels: 12,
            messages: 156,
        },
        {
            name: 'Design Studio',
            acronym: 'DS',
            members: 18,
            channels: 8,
            messages: 89,
        },
    ]

    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0])

    const handleEdit = (workspace) => {
        setSelectedWorkspace(workspace)
        setIsEditModalOpen(true)
    }

    const handleDelete = (workspace) => {
        setSelectedWorkspace(workspace)
        setIsDeleteModalOpen(true)
    }

    const saveWorkspace = (updatedWorkspace) => {
        // Save the updated workspace
        console.log('Workspace updated:', updatedWorkspace)
    }

    const deleteWorkspace = () => {
        // Delete the selected workspace
        console.log('Workspace deleted:', selectedWorkspace)
        setIsDeleteModalOpen(false)
    }

    return (
        <div className="min-h-screen bg-neutral-900 flex flex-col">
            <header className="bg-neutral-800 border-b border-neutral-700 py-4 px-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white">Workspaces</h1>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
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
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <span>New Workspace</span>
                    </button>
                </div>
            </header>

            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workspaces.map((workspace, index) => (
                        <WorkspaceCard
                            key={index}
                            {...workspace}
                            onEdit={() => handleEdit(workspace)}
                            onDelete={() => handleDelete(workspace)}
                        />
                    ))}
                </div>
            </div>

            <CreateWorkspaceModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
            <EditWorkspaceModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                workspace={selectedWorkspace}
                onSave={saveWorkspace}
            />
            <DeleteWorkspaceModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onDelete={deleteWorkspace}
            />
        </div>
    )
}

export default WorkspaceListPage
