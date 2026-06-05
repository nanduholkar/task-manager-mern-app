import React from 'react'
import Progress from '../../components/Progress'
import AvatarGroup from '../AvatarGroup'
import { LuPaperclip } from 'react-icons/lu'
import moment from "moment"

const TaskCard = ({title, description, priority, status, progress, createdAt, dueDate, attachmentCount, completedTodoCount, todoChecklist, assignedTo, onClick}) => {
  

    const getStatusTagColor = () => {
        switch(status){
            case "in-progress":
                return "text-cyan-500 bg-cyan-50 border borderr-cyan-500/10"
            case "completed":
                return "text-lime-500 bg-lime-50 border border-lime-500/20"
            default: 
            return "text-violet-500 bg-violet-50 border border-violet-500/10"
        }
    }
    const getPriorityTagColor = () => {
        switch (priority){
            case "Low":
                return "text-emerald-500 bg-emerald-50 border border-emerald-500/10"
            case "Medium":
                return "text-amber-500 bg-amber-50 border border-amber-500/10"
            default:
                return "text-rose-500 bg-rose-50 border border-rose-500/10"

        }
    }
    return (
<div
  className="bg-white rounded-2xl p-5 shadow-md shadow-gray-100 border border-gray-200/50 cursor-pointer hover:shadow-lg transition-all duration-300"
  onClick={onClick}
>
  {/* Top Row */}
  <div className="flex items-center gap-3 mb-4">
    <div
      className={`text-[11px] font-medium ${getStatusTagColor()} px-3 py-1 rounded-full`}
    >
      {status}
    </div>

    <div
      className={`text-[11px] font-medium ${getPriorityTagColor()} px-3 py-1 rounded-full`}
    >
      {priority}
    </div>
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
    {title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
    {description}
  </p>

  {/* Progress */}
  <div className="mt-4">
    <div className="flex justify-between mb-2">
      <span className="text-xs text-gray-500">Progress</span>

      <span className="text-xs font-semibold text-gray-700">
        {progress}%
      </span>
    </div>

    <Progress
      progress={progress}
      status={status}
    />

    <p className="text-sm text-gray-600 mt-2">
      {completedTodoCount} / {todoChecklist?.length || 0} Tasks Completed
    </p>
  </div>

  {/* Dates */}
  <div className="grid grid-cols-2 gap-4 mt-5">
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-500">Start Date</p>

      <p className="text-sm font-medium text-gray-800 mt-1">
        {moment(createdAt).format("Do MMM YYYY")}
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-500">Due Date</p>

      <p className="text-sm font-medium text-gray-800 mt-1">
        {moment(dueDate).format("Do MMM YYYY")}
      </p>
    </div>
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
    <AvatarGroup avatars={assignedTo || []} />

    {attachmentCount > 0 && (
      <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
        <LuPaperclip />
        <span className="text-sm">{attachmentCount}</span>
      </div>
    )}
  </div>
</div>
  )
}

export default TaskCard
