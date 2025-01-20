import React from 'react'

const BackButton = ({ setCurrentForm }) => {
    const handleBack = () => {
        setCurrentForm('login')
    }
    return (
        <button
            onClick={handleBack}
            className="mb-4 text-blue-400 hover:text-blue-300 text-sm flex items-center"
        >
            <span className="mr-1">←</span> Back to Login
        </button>
    )
}
export default BackButton
