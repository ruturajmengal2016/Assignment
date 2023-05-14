import { configureStore } from "@reduxjs/toolkit";
import { connectionSlice } from "./slice";

export default configureStore({
  reducer: { connection: connectionSlice.reducer },
});
