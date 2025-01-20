import React from 'react'

const ForgetPasswordForm = ({ setCurrentForm }) => {
    const handleSubmit = () => {
        console.log('Form Submitted')
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Forgot Password
                </h2>
                <p className="text-neutral-400 text-sm">
                    Enter your email address to reset your password
                </p>
            </div>

            <div className="space-y-2">
                <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Email"
                />
            </div>

            <button
                type="submit"
                onClick={() => setCurrentForm('verifyOtp')}
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                Send Reset Link
            </button>
        </form>
    )
}
export default ForgetPasswordForm
