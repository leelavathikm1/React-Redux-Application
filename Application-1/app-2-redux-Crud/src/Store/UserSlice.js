import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(API_URL);
  return response.json();
});

export const addUser = createAsyncThunk("users/fetchUsers", async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application.json" },
    body: JSON.stringify(user),
  });
  return response.json();
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "Loading";
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        // console.log(action.payload);
        // state.status = "Suceeded";
        // state.list = action.payload;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "Suceeded";
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        state.list[index] = action.payload;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});
export default userSlice.reducer;
