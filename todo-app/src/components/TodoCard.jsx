export function TodoCard(props) {
  const { todo, handleDeleteTodo, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={() => handleCompleteTodo(todo.id)} disabled={todo.complete}>Complete</button>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}