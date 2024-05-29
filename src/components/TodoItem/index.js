// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteItem} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteItem(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
