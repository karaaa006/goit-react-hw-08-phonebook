import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../operations/contactOperations";

const initialState = { items: [], isLoading: false, error: null };

const { reducer } = createSlice({
  name: "contactsReducer",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items, ...action.payload.data],
        isLoading: false,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    },
    [deleteContact.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.meta.arg),
        isLoading: false,
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    },
    [addContact.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled]: (state, action) => {
      if (action?.payload?.data) {
        return {
          ...state,
          items: [...state.items, action.payload.data],
          isLoading: false,
        };
      }
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    },
  },
});

export default reducer;
