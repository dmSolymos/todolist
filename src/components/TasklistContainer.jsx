import React from "react"
import TasklistItem from "./TasklistItem"
import { useSelector, useDispatch } from "react-redux"
import { openModal } from "../features/modalSlice/modalSlice"
import "./tasklistcontainer.css" // Import your CSS file for styling

const TasklistContainer = () => {
  const dispatch = useDispatch()
  const { tasklistItems } = useSelector((store) => store.tasklist)

  return (
    <section className="tasklist-container">
      <header className="tasklist-header">
        <h2>Task List</h2>
        <button onClick={() => dispatch(openModal())}>Add Task</button>
      </header>
      <div className="tasklist-items">
        {tasklistItems.map((item) => {
          return <TasklistItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default TasklistContainer
