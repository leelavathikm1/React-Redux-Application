import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  return response.json();
});

export const deletUser = createAsyncThunk("users/deleteUser", async (user) => {
  console.log(user);
  const response = await fetch("http://localhost:3000/users/" + user.id, {
    method: "DELETE",
  });
  fetchUsers();
});

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "Succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletUser.fulfilled, (state, action) => {
        state.status = "UserDeleted";
      });
  },
});
export default UserSlice.reducer;
