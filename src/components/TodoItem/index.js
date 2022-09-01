import './index.css'

const TodoItem = props => {
  const {TodoItemDetails, deleteTodo} = props
  const {title, uniqueNo} = TodoItemDetails
  const onDelete = () => {
    deleteTodo(uniqueNo)
  }
  return (
    <li className="todo-card-container">
      <div className="todo-items-details-container">
        <p className="todo-item">{title}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        delete
      </button>
    </li>
  )
}

export default TodoItem
