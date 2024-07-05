import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

function TodoList({ todos }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // toggleTodo={toggleTodo}
            deleteTodo={() => dispatch(removeTodo(todo.id))}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
