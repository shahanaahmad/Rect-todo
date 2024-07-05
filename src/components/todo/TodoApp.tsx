import { removeTodo } from "../../features/todo/todoSlice";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
function TodoApp() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1 className="m-2 p-2 text-lg text-green-900">Todo List</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
