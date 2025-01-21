import React, { useState } from 'react'
import Message from './Message/index.jsx'

const MessageContainer = () => {
    const [messages, setMessages] = useState([
        {
            user: 'John Doe',
            time: '12:30 PM',
            content: 'Hello everyone! Welcome to the **general** channel.',
            reactions: [],
            images: [],
        },
        {
            user: 'Jane Smith',
            time: '12:45 PM',
            content:
                'Hey! Thanks for having me here. Check out this link: [Documentation](https://docs.example.com)',
            reactions: [
                { emoji: '👋', count: 3 },
                { emoji: '❤️', count: 2 },
            ],
            images: ['/api/placeholder/300/200'],
        },
    ])
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message, index) => (
                <Message key={index} {...message} />
            ))}
        </div>
    )
}
export default MessageContainer
