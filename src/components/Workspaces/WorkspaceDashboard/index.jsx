import React from 'react'
import {
    Users,
    MessageSquare,
    FileText,
    Star,
    TrendingUp,
    Calendar,
    BarChart,
    Activity,
    Clock,
    Search,
} from 'lucide-react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import StatCard from './StatCard/index.jsx'
import ActivityItem from './ActivityItem/index.jsx'
import { useSelector } from 'react-redux'

const WorkspaceDashboard = ({
    setIsMobileMenuOpen,
    isMobileMenuOpen,
    menuButtonRef,
}) => {
    const { currentWorkspace } = useSelector((state) => state.workspace)

    const chartData = [
        { name: 'Mon', value: 30 },
        { name: 'Tue', value: 45 },
        { name: 'Wed', value: 35 },
        { name: 'Thu', value: 60 },
        { name: 'Fri', value: 48 },
        { name: 'Sat', value: 25 },
        { name: 'Sun', value: 40 },
    ]

    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header */}
            <header className="bg-neutral-800 border-b border-neutral-700 p-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {!isMobileMenuOpen && (
                                <button
                                    className={`lg:hidden top-4 left-4 p-2 rounded-md text-neutral-300 hover:bg-neutral-700 transition-opacity duration-300 `}
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    ref={menuButtonRef}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            )}{' '}
                            {/* Added left padding */}
                            <h1 className="text-2xl font-semibold text-white">
                                Dashboard
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="p-6">
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-2">
                                {currentWorkspace.name} Workspace
                            </h1>
                            <p className="text-neutral-400">
                                Monitor your team's performance and activity
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-3">
                            <button className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors">
                                <Calendar className="w-4 h-4 inline-block mr-2" />
                                Last 7 days
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                View Reports
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={Users}
                        label="Members"
                        value="32"
                        trend="up"
                        trendValue="12%"
                    />
                    <StatCard
                        icon={MessageSquare}
                        label="Messages"
                        value="1,429"
                        trend="up"
                        trendValue="8%"
                    />
                    <StatCard icon={FileText} label="Documents" value="892" />
                    <StatCard
                        icon={Star}
                        label="Tasks Completed"
                        value="64"
                        trend="down"
                        trendValue="5%"
                    />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Activity Chart */}
                    <div className="lg:col-span-2 bg-neutral-800 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-1">
                                    Team Activity
                                </h2>
                                <p className="text-sm text-neutral-400">
                                    Messages per day
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 text-sm bg-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-600">
                                    Week
                                </button>
                                <button className="px-3 py-1 text-sm bg-neutral-900 text-neutral-400 rounded-lg hover:bg-neutral-700">
                                    Month
                                </button>
                            </div>
                        </div>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient
                                            id="colorValue"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#3B82F6"
                                                stopOpacity={0.3}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#3B82F6"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#374151"
                                    />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#F3F4F6',
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3B82F6"
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-neutral-800 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-white mb-6">
                            Recent Activity
                        </h2>
                        <div className="space-y-1">
                            <ActivityItem
                                user="Sarah Chen"
                                action="commented on"
                                project="Q4 Marketing Plan"
                                time="2 minutes ago"
                            />
                            <ActivityItem
                                user="Alex Kim"
                                action="created"
                                project="Brand Guidelines"
                                time="1 hour ago"
                            />
                            <ActivityItem
                                user="Maria Garcia"
                                action="completed"
                                project="Social Media Calendar"
                                time="3 hours ago"
                            />
                            <ActivityItem
                                user="James Wilson"
                                action="updated"
                                project="Campaign Analytics"
                                time="5 hours ago"
                            />
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-600 transition-colors">
                            View All Activity
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceDashboard
