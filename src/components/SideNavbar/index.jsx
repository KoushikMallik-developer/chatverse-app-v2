import React, { useState, useEffect, useRef } from 'react'
import {
    ChevronDown,
    Hash,
    MessageSquare,
    Search,
    Settings,
    Workflow,
    X,
    ArrowLeft,
} from 'lucide-react'
import NavigationItem from './NavigationItem/index.jsx'
import NavigationLink from './NavigationLink/index.jsx'
import { Link } from 'react-router-dom'
import WorkspaceSettingsModal from '../Modals/Workspace/WorkspaceSettingsModal/index.jsx'

const SidebarNavigation = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuButtonRef,
    isWorkspaceSettingsModalOpen,
    setIsWorkspaceSettingsModalOpen,
}) => {
    const sidebarRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false)
            }
        }

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('resize', handleResize)
        }
    }, [isMobileMenuOpen])

    return (
        <nav
            ref={sidebarRef}
            className={`
          h-screen w-64 bg-neutral-800 fixed lg:relative border-r border-neutral-700
          transition-transform duration-300 ease-in-out z-20
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        >
            <div className="flex flex-col h-full">
                {/* Logo and Close Button */}
                <div className="px-6 py-4 border-b border-neutral-700 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <Link
                            to="/workspaces"
                            className="text-neutral-300 hover:text-white flex items-center"
                        >
                            <span>
                                <ArrowLeft className="w-5 h-5" />
                            </span>
                        </Link>
                        <h1 className="md:text-2xl sm:text-xl font-bold text-white">
                            Splitzy Team
                        </h1>
                    </div>
                    <div className="space-x-2 flex items-center">
                        <button
                            className=" text-neutral-300 hover:text-white"
                            onClick={() =>
                                setIsWorkspaceSettingsModalOpen(true)
                            }
                        >
                            <Settings className="w-5 h-5" />
                        </button>

                        <button
                            className="lg:hidden text-neutral-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 py-6 space-y-3 overflow-y-auto scrollbar-hide">
                    {/* Workspaces */}
                    <NavigationItem icon={Workflow} label="Workspaces">
                        <NavigationLink href="#">Workspace 1</NavigationLink>
                        <NavigationLink href="#">Workspace 2</NavigationLink>
                        <NavigationLink href="#">Workspace 3</NavigationLink>
                    </NavigationItem>

                    {/* Channels */}
                    <NavigationItem icon={Hash} label="Channels">
                        <NavigationLink href="#"># General</NavigationLink>
                        <NavigationLink href="#"># Random</NavigationLink>
                        <NavigationLink href="#">
                            # Announcements
                        </NavigationLink>
                    </NavigationItem>

                    {/* Direct Messages */}
                    <NavigationItem
                        icon={MessageSquare}
                        label="Direct Messages"
                    >
                        <NavigationLink href="#">John Doe</NavigationLink>
                        <NavigationLink href="#">Jane Smith</NavigationLink>
                    </NavigationItem>

                    {/* Search */}
                    <a
                        href="#search"
                        className="flex items-center px-4 py-2 text-neutral-300 hover:bg-neutral-700 rounded-lg transition-colors duration-200"
                    >
                        <Search className="w-5 h-5 mr-3" />
                        Search
                    </a>
                </div>

                {/* User Profile */}
                <div className="px-6 py-4 border-t border-neutral-700">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/api/placeholder/32/32"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-300">
                                John Doe
                            </p>
                            <p className="text-xs text-neutral-400">
                                john@example.com
                            </p>
                        </div>
                        <button className="text-neutral-400 hover:text-white">
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SidebarNavigation
