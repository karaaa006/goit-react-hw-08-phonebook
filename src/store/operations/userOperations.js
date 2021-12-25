import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp, logout } from "../../api";

export const fetchSignUp = createAsyncThunk(
  "user/fetchSignUp",
  async (user, { rejectWithValue }) => {
    try {
      const data = await signUp(user);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "user/fetchLogout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
