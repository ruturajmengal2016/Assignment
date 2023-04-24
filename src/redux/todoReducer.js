import { createSlice } from "@reduxjs/toolkit";

export const todoreducer = createSlice({
  name: "todo",
  initialState: {
    value: { task: [] },
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.task = [...state.value.task, action.payload];
    },
    removeTask: (state, action) => {
      const newList = state.value.task.filter((ele, ind) => {
        return ind !== action.payload.task;
      });
      state.value.task = newList;
    },
  },
});

export const { addTodo, removeTask } = todoreducer.actions;
