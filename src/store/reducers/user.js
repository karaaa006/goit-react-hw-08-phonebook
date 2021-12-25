import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogin,
  fetchSignUp,
  fetchLogout,
} from "../operations/userOperations";

const initialState = { username: "", token: "" };

const { reducer } = createSlice({
  name: "userReducer",
  initialState,
  extraReducers: {
    [fetchSignUp.fulfilled]: (state, action) => {
      state.username = action.payload.data.user.name;
      state.token = action.payload.data.token;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.username = action.payload.data.user.name;
      state.token = action.payload.data.token;
    },
    [fetchLogout.fulfilled]: (state, action) => {
      state.username = "";
      state.token = "";
    },
  },
});

export default reducer;
