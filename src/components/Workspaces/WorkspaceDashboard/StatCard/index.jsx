import React from 'react'

const StatCard = ({ icon: Icon, label, value, trend, trendValue }) => (
    <div className="bg-neutral-800 rounded-lg p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-neutral-700 rounded-lg">
                    <Icon className="w-5 h-5 text-neutral-300" />
                </div>
                <h3 className="text-sm font-medium text-neutral-300">
                    {label}
                </h3>
            </div>
            {trend && (
                <span
                    className={`text-xs px-2 py-1 rounded ${
                        trend === 'up'
                            ? 'bg-green-900/50 text-green-400'
                            : 'bg-red-900/50 text-red-400'
                    }`}
                >
                    {trend === 'up' ? '↑' : '↓'} {trendValue}
                </span>
            )}
        </div>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
)

export default StatCard
