import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
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
      state.items = state.items.filter((i) => i.id !== action.payload.data.id);
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
  },
});
export const { clearContactsState } = actions;

export default reducer;
