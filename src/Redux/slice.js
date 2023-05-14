import { createSlice } from "@reduxjs/toolkit";

export const connectionSlice = createSlice({
  name: "connection",
  initialState: {
    value: {
      Name: "",
      Mob: "",
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload.details;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = connectionSlice.actions;

export default connectionSlice.reducer;
