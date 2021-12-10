import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const { actions, reducer } = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = actions;

export default reducer;
