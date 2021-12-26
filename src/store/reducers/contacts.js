import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  fetchEditContact,
} from "../operations/contactOperations";

const initialState = { items: [], isLoading: false, error: null };

const { reducer, actions } = createSlice({
  name: "contactsReducer",
  initialState,
  reducers: {
    clearContactsState: () => initialState,
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action?.payload?.data;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [deleteContact.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.meta.arg);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [addContact.pending]: (state) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload.data);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [fetchEditContact.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchEditContact.fulfilled]: (state, action) => {
      const { data } = action.payload;

      const idx = state.items.findIndex((item) => item.id === data.id);
      state.items[idx] = data;

      state.isLoading = false;
    },
    [fetchEditContact.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});
export const { clearContactsState } = actions;

export default reducer;
