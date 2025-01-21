import React, { useState } from 'react'
import SidebarNavigation from '../../components/SideNavbar/index.jsx'
import WorkspaceDashboard from '../../components/Workspaces/WorkspaceDashboard/index.jsx'

const ChatArea = () => {
    const [currentChannel, setCurrentChannel] = useState(null)
    return (
        <div className="flex">
            <SidebarNavigation />
            <div className="flex-1">
                {currentChannel ? (
                    <h1>currentChannel</h1>
                ) : (
                    <WorkspaceDashboard />
                )}
            </div>
        </div>
    )
}
export default ChatArea
