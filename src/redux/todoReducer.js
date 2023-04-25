import { createSlice } from "@reduxjs/toolkit";

export const increaseButtonCount = createSlice({
  name: "increase",
  initialState: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  },
  reducers: {
    increaseBtnCount: (state, action) => {
      state[action.payload.name] += 1;
    },
  },
});

export const { increaseBtnCount } = increaseButtonCount.actions;
