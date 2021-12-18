import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import contacts from "./reducers/contacts";
import filter from "./reducers/filter";

export const reducer = combineReducers({
  contacts,
  filter,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export { store };
