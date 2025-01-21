import React, { useState } from 'react'
import { SmilePlus } from 'lucide-react'

const Message = ({ user, time, content, reactions, images }) => {
    const [showReactionPicker, setShowReactionPicker] = useState(false)
    const reactionsList = ['👍', '❤️', '😊', '🎉', '👋', '🚀', '👏', '🔥']

    const renderFormattedContent = (text) => {
        // Replace markdown-style formatting with HTML
        return text.replace(
            /(\*\*|__)(.*?)\1|(\*|_)(.*?)\3|(`{3})(.*?)\5|(`)(.*?)\7|\[(.*?)\]\((.*?)\)/g,
            (match, b1, b2, i1, i2, c1, c2, cs1, cs2, l1, l2) => {
                if (b1) return <strong key={Math.random()}>{b2}</strong>
                if (i1) return <em key={Math.random()}>{i2}</em>
                if (c1)
                    return (
                        <pre key={Math.random()}>
                            <code>{c2}</code>
                        </pre>
                    )
                if (cs1) return <code key={Math.random()}>{cs2}</code>
                if (l1)
                    return (
                        <a
                            href={l2}
                            key={Math.random()}
                            className="text-blue-400 hover:underline"
                        >
                            {l1}
                        </a>
                    )
                return match
            }
        )
    }

    return (
        <div className="flex space-x-4">
            <img
                src="/api/placeholder/40/40"
                alt={`${user} Avatar`}
                className="w-10 h-10 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{user}</span>
                    <span className="text-sm text-neutral-400">{time}</span>
                </div>
                <div className="mt-1 text-neutral-300 break-words">
                    {renderFormattedContent(content)}
                </div>
                {images && images.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Message attachment"
                                className="max-w-xs rounded-lg"
                            />
                        ))}
                    </div>
                )}
                {reactions && reactions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {reactions.map((reaction, index) => (
                            <button
                                key={index}
                                className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full text-sm flex items-center space-x-1 hover:bg-neutral-700"
                            >
                                <span>{reaction.emoji}</span>
                                <span>{reaction.count}</span>
                            </button>
                        ))}
                    </div>
                )}
                <div className="mt-2 relative flex items-center space-x-4">
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
