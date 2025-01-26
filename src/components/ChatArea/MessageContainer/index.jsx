import React, { useEffect, useRef, useState } from 'react'
import Message from './Message/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages } from '../../../store/slices/chatSlice.js'

const MessageContainer = () => {
    const { currentChannelMessages } = useSelector((state) => state.chat)
    const { currentChannel } = useSelector((state) => state.channel)

    const messageListRef = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMessages({ channelId: currentChannel._id }))
    }, [currentChannel])

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight
        }
    }, [currentChannelMessages])

    // const [messages, setMessages] = useState([
    //     {
    //         user: 'John Doe',
    //         time: '12:30 PM',
    //         content: 'Hello everyone! Welcome to the **general** channel.',
    //         reactions: [],
    //         images: [],
    //     },
    //     {
    //         user: 'Jane Smith',
    //         time: '12:45 PM',
    //         content:
    //             'Hey! Thanks for having me here. Check out this link: [Documentation](https://docs.example.com)',
    //         reactions: [
    //             { emoji: '👋', count: 3 },
    //             { emoji: '❤️', count: 2 },
    //         ],
    //         images: ['/api/placeholder/300/200'],
    //     },
    // ])

    const userDetails = {
        name: 'Jane Smith',
        status: 'Online',
        avatar: '/api/placeholder/32/32',
    }
    return (
        <div
            className="flex-1 overflow-y-auto space-y-6 md:scrollbar-hide"
            ref={messageListRef}
        >
            {currentChannelMessages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
            {/* Typing Indicator */}
            {/*<div className="flex space-x-4">*/}
            {/*    <img*/}
            {/*        src={userDetails.avatar}*/}
            {/*        alt="User Avatar"*/}
            {/*        className="w-10 h-10 rounded-full hidden sm:block"*/}
            {/*    />*/}
            {/*    <div className="flex items-center space-x-2">*/}
            {/*        <div className="text-neutral-400 text-sm">*/}
            {/*            {userDetails.name} is typing*/}
            {/*        </div>*/}
            {/*        <div className="flex space-x-1">*/}
            {/*            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>*/}
            {/*            <div*/}
            {/*                className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"*/}
            {/*                style={{ animationDelay: '0.2s' }}*/}
            {/*            ></div>*/}
            {/*            <div*/}
            {/*                className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"*/}
            {/*                style={{ animationDelay: '0.4s' }}*/}
            {/*            ></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default MessageContainer
