import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentAuthForm } from '../../../store/slices/authSlice.js'

const AuthToggle = ({ currentForm, setCurrentForm }) => {
    const { currentAuthForm } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    return (
        <div>
            {' '}
            <div className="flex bg-neutral-700 rounded-lg p-1">
                <button
                    onClick={() => dispatch(setCurrentAuthForm('login'))}
                    className={`w-1/2 py-2 text-sm rounded-md font-medium transition-colors ${
                        currentAuthForm === 'login'
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-300 hover:text-white'
                    }`}
                >
                    Login
                </button>
                <button
                    onClick={() => dispatch(setCurrentAuthForm('register'))}
                    className={`w-1/2 py-2 text-sm rounded-md font-medium transition-colors ${
                        currentAuthForm === 'register'
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-300 hover:text-white'
                    }`}
                >
                    Register
                </button>
            </div>
        </div>
    )
}
export default AuthToggle
