import React from "react";

const ActivityItem = ({ user, action, time, project }) => (
  <div className="flex items-center space-x-4 py-3">
    <img src="/api/placeholder/32/32" alt={user} className="w-8 h-8 rounded-full" />
    <div className="flex-1 min-w-0">
      <p className="text-sm text-neutral-300">
        <span className="font-medium">{user}</span>
        {' '}{action}{' '}
        <span className="font-medium">{project}</span>
      </p>
      <p className="text-xs text-neutral-500">{time}</p>
    </div>
  </div>
);

export default ActivityItem;