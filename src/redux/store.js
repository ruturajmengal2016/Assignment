import { configureStore } from "@reduxjs/toolkit";
import { packageMange } from "./todoReducer";

export const store = configureStore({
  reducer: {
    npm: packageMange.reducer,
  },
});
