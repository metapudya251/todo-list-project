import { useState } from "react";
import { useTodos } from "./TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="p-2 w-full bg-white text-black rounded" placeholder="Add a new todo" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
