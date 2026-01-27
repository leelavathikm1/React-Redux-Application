import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

const API_URL = "http://localhost:3000/users";

export const createUserAsyncAction = createAsyncThunk(
  "users/createUserAsync",
  async () => {},
);

export const getAllUserAsyncAction = createAsyncThunk(
  "users/ getAllUserAsync",
  async () => {
    console.log("getAllUserAsyncAction called");
    const response = await fetch(API_URL);
    return response.json();
  },
);

export const updateUserAsyncAction = createAsyncThunk(
  "users/updateUserAsync",
  async () => {},
);
export const deleteUserAsyncAction = createAsyncThunk(
  "users/deleteteUserAsync",
  async () => {},
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getAllUserAsyncAction.fulfilled((state, action) => {
        state.users = action.payload;
      }),
    );
  },
});

export default userSlice.reducer;
