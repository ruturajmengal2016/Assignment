import { configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "./todoReducer";

export const store = configureStore({
  reducer: {
    todo: todoreducer.reducer,
  },
});
