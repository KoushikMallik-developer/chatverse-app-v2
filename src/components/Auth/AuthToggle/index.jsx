import React from 'react'

const AuthToggle = ({ currentForm, setCurrentForm }) => {
    return (
        <div>
            {' '}
            <div className="flex bg-neutral-700 rounded-lg p-1">
                <button
                    onClick={() => setCurrentForm('login')}
                    className={`w-1/2 py-2 text-sm rounded-md font-medium transition-colors ${
                        currentForm === 'login'
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-300 hover:text-white'
                    }`}
                >
                    Login
                </button>
                <button
                    onClick={() => setCurrentForm('register')}
                    className={`w-1/2 py-2 text-sm rounded-md font-medium transition-colors ${
                        currentForm === 'register'
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
