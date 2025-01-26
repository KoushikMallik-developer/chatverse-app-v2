import React, { useEffect, useRef, useState } from 'react'
import SidebarNavigation from '../../components/SideNavbar/index.jsx'
import WorkspaceDashboard from '../../components/Workspaces/WorkspaceDashboard/index.jsx'
import ChannelChatArea from '../../components/ChatArea/ChannelChatArea/index.jsx'
import DMChatArea from '../../components/ChatArea/DMChatArea/index.jsx'
import SearchResults from '../../components/SearchResults/index.jsx'
import { useNavigate } from 'react-router-dom'
import WorkspaceSettingsModal from '../../components/Modals/Workspace/WorkspaceSettingsModal/index.jsx'
import AddUserWorkspaceModal from '../../components/Modals/Workspace/AddUserToWorkspaceModal/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChannels } from '../../store/slices/channelSlice.js'
import { getDMs } from '../../store/slices/dmSlice.js'

const ChatArea = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { currentWorkspace, workspaces } = useSelector(
        (state) => state.workspace
    )
    const { currentChannel, channels } = useSelector((state) => state.channel)
    const { dms } = useSelector((state) => state.dm)
    const { token } = useSelector((state) => state.auth)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)
    const [searchResult, setSearchResult] = useState(null)
    const [isWorkspaceSettingsModalOpen, setIsWorkspaceSettingsModalOpen] =
        useState(false)
    const [
        isAddMemberToWorkspaceModalOpen,
        setIsAddMemberToWorkspaceModalOpen,
    ] = useState(false)

    const handleBackToChatClick = () => {
        navigate(`/workspace/${currentWorkspace._id}`)
    }

    useEffect(() => {
        dispatch(fetchChannels({ workspaceId: currentWorkspace._id }))
        dispatch(getDMs({ workspaceId: currentWorkspace._id }))
    }, [currentWorkspace, token])

    return (
        <div className="flex">
            <SidebarNavigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                menuButtonRef={menuButtonRef}
                isWorkspaceSettingsModalOpen={isWorkspaceSettingsModalOpen}
                setIsWorkspaceSettingsModalOpen={
                    setIsWorkspaceSettingsModalOpen
                }
            />
            <div className="flex-1 justify-center items-center">
                {!searchResult ? (
                    currentChannel?._id ? (
                        currentChannel.type === 'dm' ? (
                            <DMChatArea
                                isMobileMenuOpen={isMobileMenuOpen}
                                setIsMobileMenuOpen={setIsMobileMenuOpen}
                                menuButtonRef={menuButtonRef}
                            />
                        ) : (
                            <ChannelChatArea
                                isMobileMenuOpen={isMobileMenuOpen}
                                setIsMobileMenuOpen={setIsMobileMenuOpen}
                                menuButtonRef={menuButtonRef}
                            />
                        )
                    ) : (
                        <WorkspaceDashboard
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            menuButtonRef={menuButtonRef}
                        />
                    )
                ) : (
                    <SearchResults onBackClick={handleBackToChatClick} />
                )}
            </div>
            {isWorkspaceSettingsModalOpen && (
                <WorkspaceSettingsModal
                    onClose={() => setIsWorkspaceSettingsModalOpen(false)}
                    isOpen={isWorkspaceSettingsModalOpen}
                    setIsAddMemberToWorkspaceModalOpen={
                        setIsAddMemberToWorkspaceModalOpen
                    }
                />
            )}
            {isAddMemberToWorkspaceModalOpen && (
                <AddUserWorkspaceModal
                    isOpen={isAddMemberToWorkspaceModalOpen}
                    onClose={() => setIsAddMemberToWorkspaceModalOpen(false)}
                />
            )}
        </div>
    )
}
export default ChatArea
