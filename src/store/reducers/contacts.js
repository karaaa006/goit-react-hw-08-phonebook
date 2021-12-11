import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const isInclude = (name, state) => {
  if (state.length > 0) {
    return state.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  }
};

const { actions, reducer } = createSlice({
  name: "contactsReducer",
  initialState,
  reducers: {
    addContact(state, action) {
      if (isInclude(action.payload.name, state)) {
        alert(`${action.payload.name} is already in contacts.`);
        return;
      }

      return [...state, action.payload];
    },
    delContact(state, action) {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addContact, delContact } = actions;

export default reducer;
