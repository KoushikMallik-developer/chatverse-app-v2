import React from 'react'

const VerifyOTPForm = ({ setCurrentForm }) => {
    const handleSubmit = () => {
        console.log('Form Submitted')
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Verify OTP
                </h2>
                <p className="text-neutral-400 text-sm">
                    Please enter the verification code sent to your email
                </p>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                    Enter OTP
                </label>
                <div className="flex gap-2 justify-between">
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-10 h-10 text-center px-0 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    ))}
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                Verify OTP
            </button>

            <div className="text-center">
                <button
                    type="button"
                    className="text-sm text-blue-400 hover:text-blue-300"
                >
                    Resend OTP
                </button>
            </div>
        </form>
    )
}
export default VerifyOTPForm
