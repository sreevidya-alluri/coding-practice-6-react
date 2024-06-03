import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    newTodoTitle: '',
  }

  deleteItem = id => {
    const {todoList} = this.state
    const filterItem = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: filterItem})
  }

  addTodos = () => {
    const {todoList, newTodoTitle} = this.state
    if (newTodoTitle.trim() !== '') {
      const [title, count] = newTodoTitle.split(' ')
      const todoCount = parseInt(count, 10) || 1
      const newTodos = Array.from({length: todoCount}, (_, index) => ({
        id: todoList.length + index + 1,
        title,
      }))

      this.setState({
        todoList: [...todoList, ...newTodos],
        newTodoTitle: '',
      })
    }
  }

  handleInputChange = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  editItem = (id, newTitle) => {
    const {todoList} = this.state
    const updatedList = todoList.map(todo =>
      todo.id === id ? {...todo, title: newTitle} : todo,
    )
    this.setState({todoList: updatedList})
  }

  toggleComplete = id => {
    const {todoList} = this.state
    const updatedList = todoList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todoList: updatedList})
  }

  render() {
    const {todoList, newTodoTitle} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              type="text"
              className="input"
              value={newTodoTitle}
              onChange={this.handleInputChange}
              placeholder="Enter new todo"
            />
            <button
              className="button-add"
              type="button"
              onClick={this.addTodos}
            >
              Add
            </button>
          </div>
          <ul className="list-items">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
