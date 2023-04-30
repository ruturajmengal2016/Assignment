import { createSlice } from "@reduxjs/toolkit";

export const packageMange = createSlice({
  name: "npm",
  initialState: {
    data: [],
    favourites: [],
  },
  reducers: {
    addData: (state, action) => {
      if (action.payload.package !== "") {
        if (action.type === "favourite") {
          state.favourites.unshift(action.payload.package);
        } else {
          state.data.unshift(action.payload.package);
        }
      }
    },
    removeItem: (state, action) => {
      state.data.splice(action.payload.ind, 1);
      state.favourites.splice(action.payload.ind, 1);
    },
    addFavourite: (state, action) => {
      state.favourites.unshift(state.data[action.payload.ind]);
    },
  },
});

export const { addData, removeItem,addFavourite } = packageMange.actions;
