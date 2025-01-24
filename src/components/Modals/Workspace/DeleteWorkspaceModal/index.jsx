import { useDispatch, useSelector } from 'react-redux'
import { removeWorkspace } from '../../../../store/slices/workspaceSlice.js'

const DeleteWorkspaceModal = ({ isOpen, onClose }) => {
    const { currentWorkspace } = useSelector((state) => state.workspace)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(removeWorkspace({ workspaceId: currentWorkspace._id }))
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
                    Confirm Deletion
                </h2>
                <p className="text-neutral-300 mb-6">
                    Are you sure you want to delete this workspace? This action
                    cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-neutral-300 hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWorkspaceModal
