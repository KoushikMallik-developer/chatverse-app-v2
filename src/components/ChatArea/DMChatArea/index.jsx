import React from 'react'
import DMChatHeader from '../DMChatHeader/index.jsx'
import MessageContainer from '../MessageContainer/index.jsx'
import MessageInput from '../MessageInput/index.jsx'

const DMChatArea = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuButtonRef,
}) => {
    return (
        <div className="h-screen bg-neutral-900 flex flex-col">
            <DMChatHeader
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                menuButtonRef={menuButtonRef}
            />
            <MessageContainer />
            <MessageInput />
        </div>
    )
}

export default DMChatArea
