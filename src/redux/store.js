import { configureStore } from "@reduxjs/toolkit";
import { increaseButtonCount } from "./todoReducer";

export const store = configureStore({
  reducer: {
    increase: increaseButtonCount.reducer,
  },
});
