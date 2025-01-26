import React, { useState, useRef, useEffect } from 'react'
import {
    MessageCircle,
    Paperclip,
    X,
    Search,
    MoreVertical,
    Info,
    Image,
    Bold,
    Italic,
    Code,
    Link,
    Send,
    UserPlus,
    Settings,
    Trash2,
    Smile,
    SmilePlus,
} from 'lucide-react'
import DeleteChannelModal from '../../Modals/Channel/DeleteChannelModal/index.jsx'
import ChannelDetailsModal from '../../Modals/Channel/ChannelDetailsModal/index.jsx'
import ChannelSettingsModal from '../../Modals/Channel/ChannelSettingsModal/index.jsx'
import MessageInput from '../MessageInput/index.jsx'
import MessageContainer from '../MessageContainer/index.jsx'
import ChatHeader from '../ChatHeader/index.jsx'

const ChannelChatArea = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuButtonRef,
}) => {
    return (
        <div className="h-screen bg-neutral-900 flex flex-col">
            <ChatHeader
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                menuButtonRef={menuButtonRef}
            />
            <MessageContainer />
            <MessageInput />
        </div>
    )
}

export default ChannelChatArea
