import React, { useState } from 'react'
import { SmilePlus } from 'lucide-react'
import NameToAvatar from '../../../../utils/name_to_avatar.jsx'
import { format_timestamp } from '../../../../utils/format_timestamp.js'

const Message = ({ message }) => {
    const [showReactionPicker, setShowReactionPicker] = useState(false)
    const reactionsList = ['👍', '❤️', '😊', '🎉', '🚀', '👏', '🔥']

    const renderFormattedContent = (text) => {
        if (!text) return null

        // Replace bold (**text**)
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

        // Replace italic (*text*)
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>')

        // Replace code block (```text```)
        text = text.replace(
            /```\n([^]+?)\n```/g,
            '<pre><code class="bg-neutral-800 text-neutral-200 px-2 py-1 rounded block">$1</code></pre>'
        )
        text = text.replace(
            /```([^]+?)```/g,
            '<pre><code class="bg-neutral-800 text-neutral-200 px-2 py-1 rounded block">$1</code></pre>'
        )

        // Replace inline code (`text`)
        text = text.replace(
            /`(.*?)`/g,
            '<code class="bg-neutral-800 text-neutral-200 px-1 py-0.5 rounded">$1</code>'
        )

        // Replace links ([text](url))
        text = text.replace(
            /\[(.*?)\]\((.*?)\)/g,
            '<a href="$2" class="text-blue-500 hover:underline">$1</a>'
        )

        return <span dangerouslySetInnerHTML={{ __html: text }} />
    }

    return (
        <div className="flex space-x-4 hover:bg-neutral-700 px-4 py-2">
            <NameToAvatar name={message.sender.name} size={30} />
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                        {message.sender.name}
                    </span>
                    <span className="text-sm text-neutral-400">
                        {format_timestamp(message.createdAt)}
                    </span>
                </div>
                <div className="mt-1 text-neutral-300 break-words">
                    {renderFormattedContent(message.content)}
                </div>
                {/*{images && images.length > 0 && (*/}
                {/*    <div className="mt-2 flex flex-wrap gap-2">*/}
                {/*        {images.map((img, index) => (*/}
                {/*            <img*/}
                {/*                key={index}*/}
                {/*                src={img}*/}
                {/*                alt="Message attachment"*/}
                {/*                className="max-w-xs rounded-lg"*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*)}*/}
                {message.reactions && message.reactions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {reactions.map((reaction, index) => (
                            <button
                                key={index}
                                className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full text-sm flex items-center space-x-1 hover:bg-neutral-700"
                            >
                                <span>{message.reaction.emoji}</span>
                                <span>{message.reaction.count}</span>
                            </button>
                        ))}
                    </div>
                )}
                <div className="mt-4 relative flex items-center justify-between">
                    <button
                        onClick={() =>
                            setShowReactionPicker(!showReactionPicker)
                        }
                        className="text-neutral-400 hover:text-white text-sm flex items-center space-x-1"
                    >
                        <SmilePlus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add reaction</span>
                    </button>
                    <button className="text-neutral-400 hover:text-white text-sm flex items-center space-x-1">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                        </svg>
                        <span>Reply</span>
                    </button>
                    {showReactionPicker && (
                        <div className="absolute bottom-full left-0 mb-2 bg-neutral-800 rounded-lg p-2 shadow-lg">
                            <div className="flex gap-2">
                                {reactionsList.map((emoji) => (
                                    <button
                                        key={emoji}
                                        onClick={() => {
                                            // Handle reaction
                                            setShowReactionPicker(false)
                                        }}
                                        className="hover:bg-neutral-700 p-1 rounded"
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Message
