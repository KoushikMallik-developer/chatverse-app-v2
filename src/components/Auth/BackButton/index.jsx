import React from 'react'
import { setCurrentAuthForm } from '../../../store/slices/authSlice.js'
import { useDispatch } from 'react-redux'

const BackButton = () => {
    const dispatch = useDispatch()
    const handleBack = () => {
        dispatch(setCurrentAuthForm('login'))
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
