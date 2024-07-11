import { useTodos } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`flex justify-between items-center p-2 mb-2 border`}>
      <div className={`flex ${todo.completed ? "line-through" : ""}`}>{todo.text}</div>
      <div>
        <button onClick={() => toggleTodo(todo.id)} className={`text-white px-2 py-1 ${todo.completed ? "bg-green-400" : "bg-blue-400"}`}>
          {todo.completed ? "Selesai" : "Belum Selesai"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-2 py-1">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
