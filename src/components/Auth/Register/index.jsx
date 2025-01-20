import React from 'react'

const Register = ({ setCurrentForm }) => {
    const handleSubmit = () => {
        console.log('Form Submitted')
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Full Name"
                />
            </div>

            <div className="space-y-2">
                <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Email"
                />
            </div>

            <div className="space-y-2">
                <input
                    type="password"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Password"
                />
            </div>

            <div className="space-y-2">
                <input
                    type="password"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Confirm Password"
                />
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 rounded bg-neutral-700 border-neutral-600 text-blue-500 focus:ring-blue-500"
                />
                <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-neutral-300"
                >
                    I agree to the Terms of Service and Privacy Policy
                </label>
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                Create Account
            </button>
        </form>
    )
}
export default Register
