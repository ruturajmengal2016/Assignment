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
    complete: (state, action) => {
      const newTask = {
        task: state.value.task[action.payload.task].task,
        complete: action.payload.complete,
      };
      state.value.task.splice(action.payload.task, 1);
      state.value.task = [...state.value.task, newTask];
    },
  },
});

export const { addTodo, removeTask, complete } = todoreducer.actions;
