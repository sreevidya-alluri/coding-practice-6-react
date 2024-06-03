import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteItem, editItem, toggleComplete} = props
  const {id, title, completed} = todoDetails

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteItem(id)
  }

  const onEditTodo = () => {
    setIsEditing(true)
  }

  const onSaveTodo = () => {
    setIsEditing(false)
    editItem(id, newTitle)
  }

  const onToggleComplete = () => {
    toggleComplete(id)
  }

  const handleTitleChange = event => {
    setNewTitle(event.target.value)
  }

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={onToggleComplete} />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          className="edit-input"
        />
      ) : (
        <p className="title">{title}</p>
      )}
      <div className="rowww">
        {isEditing ? (
          <button type="button" className="save-btn" onClick={onSaveTodo}>
            Save
          </button>
        ) : (
          <button type="button" className="edit-btn" onClick={onEditTodo}>
            Edit
          </button>
        )}
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
