import React from "react";
import TodoItem from "./TodoItem";
import TodoListRenderProps from "./TodoListRenderProps";
import { useTodos } from "./TodoContext";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <TodoListRenderProps
      render={(todos) => (
        <div>
          {todos.length === 0 && <p>No todos yet! Please add todo first!</p>}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    />
  );
};

export default TodoList;
