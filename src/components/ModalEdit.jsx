import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeEditModal } from "../features/modalSlice/modalEditSlice"
import { changeTask } from "../features/tasklist/tasklistSlice"
import "./modaledit.css" // Import your CSS file for styling

const ModalEdit = () => {
  const dispatch = useDispatch()
  const { editValue } = useSelector((state) => state.tasklist)
  const [edit, setEdit] = useState(editValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeTask(edit))
    dispatch(closeEditModal())
  }

  const handleInputChange = (e) => {
    setEdit({ ...edit, title: e.target.value })
  }

  const handlePrioChange = (e) => {
    setEdit({ ...edit, priority: e.target.id })
  }

  return (
    <aside className="modal-container">
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>Edit Task</h2>
        <span>Task:</span>
        <input
          type="text"
          name="title"
          value={edit.title}
          onChange={handleInputChange}
        />
        <br />
        <span>Priority:</span>
        <ul className="priority-list">
          <li
            id="low"
            className={edit.priority === "low" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            Low
          </li>
          <li
            id="medium"
            className={edit.priority === "medium" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            Medium
          </li>
          <li
            id="high"
            className={edit.priority === "high" ? "selected" : ""}
            onClick={handlePrioChange}
          >
            High
          </li>
        </ul>
        <div className="buttons">
        <button type="submit">Save</button>
        <button onClick={() => dispatch(closeEditModal())}>Close</button>
        </div>
      </form>
    </aside>
  )
}

export default ModalEdit
