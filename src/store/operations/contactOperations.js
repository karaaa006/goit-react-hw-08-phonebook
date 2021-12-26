import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, setContact, delContact, editContact } from "../../api";
import { isInclude } from "../../utils";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      const data = await delContact(id);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const data = await setContact(contact);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchEditContact = createAsyncThunk(
  "contacts/fetchEditContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { id, name, number } = contact;
      const data = await editContact(id, { name, number });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
