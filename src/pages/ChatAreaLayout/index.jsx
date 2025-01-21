import React, { useRef, useState } from 'react'
import SidebarNavigation from '../../components/SideNavbar/index.jsx'
import WorkspaceDashboard from '../../components/Workspaces/WorkspaceDashboard/index.jsx'
import ChannelChatArea from '../../components/ChatArea/ChannelChatArea/index.jsx'
import DMChatArea from '../../components/ChatArea/DMChatArea/index.jsx'
import SearchResults from '../../components/SearchResults/index.jsx'
import { useNavigate } from 'react-router-dom'

const ChatArea = () => {
    const navigate = useNavigate()
    const [currentChannel, setCurrentChannel] = useState({
        type: 'public',
    })
    // const currentChannel = null
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)
    const [searchResult, setSearchResult] = useState(null)

    const handleBackToChatClick = () => {
        // Navigate back to chat (implementation depends on your routing setup)
        navigate('/workspace/abcd') // or history.push('/chat') etc.
    }

    return (
        <div className="flex">
            <SidebarNavigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                menuButtonRef={menuButtonRef}
            />
            <div className="flex-1">
                {!searchResult ? (
                    currentChannel ? (
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
                        <WorkspaceDashboard />
                    )
                ) : (
                    <SearchResults onBackClick={handleBackToChatClick} />
                )}
            </div>
        </div>
    )
}
export default ChatArea
