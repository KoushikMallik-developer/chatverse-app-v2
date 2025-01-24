import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-neutral-800/50 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center text-neutral-400">
                    <p>
                        © 2025 {import.meta.env.VITE_APP_NAME || 'ChatVerse'} |
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
