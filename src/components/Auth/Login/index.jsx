import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    loginUser,
    setCurrentAuthForm,
} from '../../../store/slices/authSlice.js'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        dispatch(
            loginUser({
                email: email,
                password: password,
            })
        )
        setEmail('')
        setPassword('')
    }
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <input
                    type="password"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded bg-neutral-700 border-neutral-600 text-blue-500 focus:ring-blue-500"
                    />
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-neutral-300"
                    >
                        Remember me
                    </label>
                </div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch(setCurrentAuthForm('forgotPassword'))
                    }
                    className="text-sm text-blue-400 hover:text-blue-300"
                >
                    Forgot password?
                </button>
            </div>

            <button
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                onClick={handleSubmit}
            >
                Sign in
            </button>
        </form>
    )
}
export default Login
