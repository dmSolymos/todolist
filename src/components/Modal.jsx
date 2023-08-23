import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { closeModal } from "../features/modalSlice/modalSlice"
import { addTask } from "../features/tasklist/tasklistSlice"
import "./modal.css" 

const Modal = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    id: Date.now(),
    title: "",
    priority: "low",
    status: "To Do",
    progress: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(form))
    dispatch(closeModal())
  }

  const handleInputChange = (e) => {
    setForm({ ...form, title: e.target.value })
  }
  const handlePrioChange = (e) => {
    setForm({ ...form, priority: e.target.id })
  }

  return (
    <aside className="modal-container">
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <span>Task:</span>
        <input
          type="text"
          name="title"
          value={form.title || ""}
          onChange={handleInputChange}
        />
        <br />
        <span>Priority:</span>
        <ul className="priority-list">
          <li
            id="low"
            className={form.priority === "low" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            Low
          </li>
          <li
            id="medium"
            className={form.priority === "medium" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            Medium
          </li>
          <li
            id="high"
            className={form.priority === "high" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            High
          </li>
        </ul>
        <div className="buttons">
        {form.title && <button type="submit">Add</button>}
        <button onClick={() => dispatch(closeModal())}>Close</button>
        </div>
      </form>
    </aside>
  )
}

export default Modal
