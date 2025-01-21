import React, { useState } from 'react'

const Profile = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        desktop: true,
        sound: false,
    })

    const toggleNotification = (type) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: !prev[type],
        }))
    }

    return (
        <div className="min-h-screen bg-neutral-900">
            <div className="max-w-4xl mx-auto p-4 sm:p-6">
                {/* Profile Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">
                        Profile Settings
                    </h1>
                    <p className="text-neutral-400">
                        Manage your profile information and preferences
                    </p>
                </div>

                {/* Profile Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Picture */}
                        <div className="text-center">
                            <div className="relative inline-block">
                                <img
                                    src="/api/placeholder/128/128"
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full border-4 border-neutral-700 transition-opacity duration-300"
                                />
                                <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                            <h3 className="text-white font-medium mb-4">
                                Activity Stats
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">
                                        Messages
                                    </span>
                                    <span className="text-white">1,234</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">
                                        Workspaces
                                    </span>
                                    <span className="text-white">5</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">
                                        Joined
                                    </span>
                                    <span className="text-white">Jan 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-neutral-800 rounded-lg p-4 sm:p-6 border border-neutral-700">
                            <h2 className="text-lg font-medium text-white mb-4">
                                Personal Information
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                                            defaultValue="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                                            defaultValue="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500"
                                        defaultValue="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Bio
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500 resize-none h-24"
                                        defaultValue="Frontend Developer | Coffee Enthusiast"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                                        Time Zone
                                    </label>
                                    <select className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-blue-500">
                                        <option>UTC-8 (Pacific Time)</option>
                                        <option>UTC-5 (Eastern Time)</option>
                                        <option>UTC+0 (GMT)</option>
                                        <option>
                                            UTC+1 (Central European Time)
                                        </option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        {/* Preferences */}
                        <div className="bg-neutral-800 rounded-lg p-4 sm:p-6 border border-neutral-700">
                            <h2 className="text-lg font-medium text-white mb-4">
                                Preferences
                            </h2>
                            <div className="space-y-4">
                                {/* Email Notifications */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Email Notifications
                                        </h3>
                                        <p className="text-sm text-neutral-400">
                                            Receive email notifications for
                                            messages and mentions
                                        </p>
                                    </div>
                                    <button
                                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-700"
                                        role="switch"
                                        onClick={() =>
                                            toggleNotification('email')
                                        }
                                    >
                                        <span
                                            className={`${
                                                notifications.email
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full transition-transform ${
                                                notifications.email
                                                    ? 'bg-blue-500'
                                                    : 'bg-neutral-500'
                                            }`}
                                        />
                                    </button>
                                </div>

                                {/* Desktop Notifications */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Desktop Notifications
                                        </h3>
                                        <p className="text-sm text-neutral-400">
                                            Show desktop notifications for new
                                            messages
                                        </p>
                                    </div>
                                    <button
                                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-700"
                                        role="switch"
                                        onClick={() =>
                                            toggleNotification('desktop')
                                        }
                                    >
                                        <span
                                            className={`${
                                                notifications.desktop
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full transition-transform ${
                                                notifications.desktop
                                                    ? 'bg-blue-500'
                                                    : 'bg-neutral-500'
                                            }`}
                                        />
                                    </button>
                                </div>

                                {/* Sound Effects */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Sound Effects
                                        </h3>
                                        <p className="text-sm text-neutral-400">
                                            Play sounds for new messages and
                                            notifications
                                        </p>
                                    </div>
                                    <button
                                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-700"
                                        role="switch"
                                        onClick={() =>
                                            toggleNotification('sound')
                                        }
                                    >
                                        <span
                                            className={`${
                                                notifications.sound
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full transition-transform ${
                                                notifications.sound
                                                    ? 'bg-blue-500'
                                                    : 'bg-neutral-500'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Save Changes Button */}
                        <div className="flex justify-end">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
