import { configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "./slice";

export default configureStore({
  reducer: { question: questionSlice.reducer },
});
