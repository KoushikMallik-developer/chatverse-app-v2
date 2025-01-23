import React, { useState } from 'react'
import {
    arePasswordsMatching,
    isValidEmail,
    isValidName,
} from '../../../utils/helpers.js'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../store/slices/authSlice.js'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreeTerms, setAgreeTerms] = useState(false)

    const { isLoading, status_code } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (
            isValidName(name) &&
            isValidEmail(email) &&
            arePasswordsMatching(password, confirmPassword)
        ) {
            dispatch(
                registerUser({
                    name: name,
                    email: email,
                    password: password,
                })
            )
        }
    }
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

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

            <div className="space-y-2">
                <input
                    type="password"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 rounded bg-neutral-700 border-neutral-600 text-blue-500 focus:ring-blue-500"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-neutral-300"
                >
                    I agree to the Terms of Service and Privacy Policy
                </label>
            </div>

            <button
                type="button"
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                onClick={handleSubmit}
                disabled={!agreeTerms}
            >
                Create Account
            </button>
        </form>
    )
}
export default Register
