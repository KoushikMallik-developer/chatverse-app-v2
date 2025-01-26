import React, { useEffect, useRef, useState } from 'react'
import { Bold, Code, Image, Italic, Link, Send, Smile, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../../store/slices/chatSlice.js'

const MessageInput = () => {
    const [message, setMessage] = useState('')
    const [imageFiles, setImageFiles] = useState([])
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const textareaRef = useRef(null)
    const fileInputRef = useRef(null)

    const { user } = useSelector((state) => state.auth)
    const { currentChannel } = useSelector((state) => state.channel)

    const dispatch = useDispatch()

    const emojiList = [
        '😊',
        '😂',
        '🤣',
        '❤️',
        '😍',
        '🙌',
        '👍',
        '👏',
        '🎉',
        '✨',
        '🔥',
        '💯',
        '🤔',
        '👀',
        '🙏',
        '💪',
        '⭐',
        '🌟',
        '💫',
        '📢',
        '🚀',
        '💡',
    ]

    // Initialize textarea height
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '6rem' // Default to 2 lines height
        }
    }, [])

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`
    }

    const insertEmoji = (emoji) => {
        const textarea = textareaRef.current
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const newMessage =
            message.substring(0, start) + emoji + message.substring(end)
        setMessage(newMessage)
        setShowEmojiPicker(false)
    }

    const handleInput = (e) => {
        setMessage(e.target.value)
        adjustTextareaHeight()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const handleFormat = (format) => {
        const textarea = textareaRef.current
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = message.substring(start, end)
        let formattedText = ''

        switch (format) {
            case 'bold':
                formattedText = `**${selectedText}**`
                break
            case 'italic':
                formattedText = `*${selectedText}*`
                break
            case 'code':
                formattedText = `\`${selectedText}\``
                break
            case 'codeblock':
                formattedText = `\`\`\`\n${selectedText}\n\`\`\``
                break
            case 'link':
                formattedText = `[${selectedText}](url)`
                break
            default:
                return
        }

        const newMessage =
            message.substring(0, start) + formattedText + message.substring(end)
        setMessage(newMessage)
    }

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        setImageFiles([...imageFiles, ...files])
    }

    const handleSend = () => {
        if (message.trim() || imageFiles.length > 0) {
            console.log('Sending message:', message, 'Images:', imageFiles)
            dispatch(
                sendMessage({
                    senderId: user._id,
                    channelId: currentChannel._id,
                    content: message,
                })
            )
            setMessage('')
            setImageFiles([])
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto'
            }
        }
    }

    return (
        <div className="p-4 border-t border-neutral-700 bg-neutral-800">
            <div className="flex flex-col space-y-2">
                <div className="bg-neutral-700 rounded-lg">
                    <div className="flex items-center p-2 border-b border-neutral-600 flex-wrap gap-2">
                        <button
                            onClick={() => handleFormat('bold')}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Bold"
                        >
                            <Bold className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleFormat('italic')}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Italic"
                        >
                            <Italic className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleFormat('code')}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Code"
                        >
                            <Code className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleFormat('codeblock')}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Code Block"
                        >
                            <Code className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleFormat('link')}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Link"
                        >
                            <Link className="w-4 h-4" />
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            multiple
                            className="hidden"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="p-1 text-neutral-400 hover:text-white"
                            title="Upload Image"
                        >
                            <Image className="w-4 h-4" />
                        </button>
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setShowEmojiPicker(!showEmojiPicker)
                                }
                                className="p-1 text-neutral-400 hover:text-white"
                                title="Emoji"
                            >
                                <Smile className="w-4 h-4" />
                            </button>
                            {showEmojiPicker && (
                                <div
                                    id="emojiSelector"
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-neutral-800 rounded-lg p-2 shadow-lg z-10 w-64 sm:w-80"
                                >
                                    <div className="grid grid-cols-8 gap-1">
                                        {emojiList.map((emoji) => (
                                            <button
                                                key={emoji}
                                                onClick={() =>
                                                    insertEmoji(emoji)
                                                }
                                                className="hover:bg-neutral-700 p-1 rounded text-lg"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            placeholder="Message #general"
                            rows="1"
                            className="w-full px-4 py-2 bg-transparent text-white placeholder-neutral-400 focus:outline-none resize-none pr-12"
                        />
                        <button
                            onClick={handleSend}
                            className="absolute right-2 bottom-2 text-neutral-400 hover:text-white p-1"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {imageFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {imageFiles.map((file, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Upload preview"
                                    className="h-20 w-20 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() =>
                                        setImageFiles((files) =>
                                            files.filter((_, i) => i !== index)
                                        )
                                    }
                                    className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 hover:bg-red-600"
                                >
                                    <X className="w-3 h-3 text-white" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageInput
