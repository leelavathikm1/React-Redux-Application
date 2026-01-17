import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../User-Components/UserSlice";

export const store = configureStore({
  reducer: {
    users: useReducer,
  },
});
