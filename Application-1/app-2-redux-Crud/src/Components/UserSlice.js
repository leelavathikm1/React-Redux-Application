import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  return response.json();
});
const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "Loading";
      })

      .addCase(fetchUsers.rejucted, (state, action) => {
        state.status = "Suceeded";
        state.list = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
