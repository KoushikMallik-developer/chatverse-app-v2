import React from 'react'

const NameToAvatar = ({ name, size = 40 }) => {
    // Function to get initials from the name
    const getInitials = (name) => {
        if (!name) return 'N/A'
        const words = name.trim().split(' ')
        const initials =
            words.length > 1
                ? (words[0][0] ? words[0][0].toUpperCase() : '') +
                  (words[1][0] ? words[1][0].toUpperCase() : '')
                : words[0][0]
                  ? words[0][0].toUpperCase()
                  : ''
        return initials
    }

    const initials = getInitials(name)

    return (
        <div
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                fontSize: `${size / 2.5}px`, // Adjust font size based on avatar size
            }}
        >
            {initials}
        </div>
    )
}

export default NameToAvatar
