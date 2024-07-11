const TodoListRenderProps = ({ render }) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return render(todos);
};

export default TodoListRenderProps;
