import React, { useRef, useState } from 'react'
import SidebarNavigation from '../../components/SideNavbar/index.jsx'
import WorkspaceDashboard from '../../components/Workspaces/WorkspaceDashboard/index.jsx'
import ChannelChatArea from '../../components/ChatArea/ChannelChatArea/index.jsx'

const ChatArea = () => {
    const [currentChannel, setCurrentChannel] = useState('null')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)
    return (
        <div className="flex">
            <SidebarNavigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                menuButtonRef={menuButtonRef}
            />
            <div className="flex-1">
                {currentChannel ? (
                    <ChannelChatArea
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        menuButtonRef={menuButtonRef}
                    />
                ) : (
                    <WorkspaceDashboard />
                )}
            </div>
        </div>
    )
}
export default ChatArea
