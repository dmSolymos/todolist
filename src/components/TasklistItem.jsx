import React from "react"
import { useDispatch } from "react-redux"
import {
  removeTask,
  updateProgress,
  editTask,
} from "../features/tasklist/tasklistSlice"
import { openEditModal } from "../features/modalSlice/modalEditSlice"
import "./tasklistitem.css" // Import your CSS file for styling

const TasklistItem = ({ id, title, priority, status, progress }) => {
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    dispatch(editTask({ id }))
    dispatch(openEditModal())
  }

  return (
    <article className="tasklist-item">
      <div className="task-info">
        <p className="task-label">Task</p>
        <h2>{title}</h2>
      </div>
      <div className="task-info">
        <p className="task-label">Priority</p>
        <h2>{priority}</h2>
      </div>
      <h2 className="status">{status}</h2>
      <button
        className="progress-button"
        onClick={() => dispatch(updateProgress({ id }))}
      >
        Update Progress
      </button>
      <h2 className="progress">Current status(out of 100): {progress}</h2>
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button
        className="delete-button"
        onClick={() => dispatch(removeTask(id))}
      >
        Delete
      </button>
    </article>
  )
}

export default TasklistItem
