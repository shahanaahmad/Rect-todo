import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "hello world" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      console.log("todoes>>>>>>>>", state, action);

      state.todos = state.todos?.filter((todo) => {
        return todo.id !== action.payload;
      });
      console.log("todoes>>>>>>>>", state.todos);
    },

    // updateTodo: (state, action) => {
    //   const todoData = state.todos.find((id) => action.payload.id === id);
    //   if (todoData) {
    //     todoData.text = action.payload.text;
    //   }
    // },
    // getTodoList: (state, action) => {
    // call api
    // }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
