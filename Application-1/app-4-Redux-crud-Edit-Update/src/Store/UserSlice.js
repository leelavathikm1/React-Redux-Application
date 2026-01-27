import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const createUserAyncAction = createAsyncThunk(
//   "users/createUserAsync",
//   async (user) => {
//     const responce = await fetch("http://localhost:3000/users/", {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: { "Content-Type": "application/json" },
//     });

//     return await responce.json;
//   },
// );

export const getAllUsersAsyncAction = createAsyncThunk(
  "users/getAllUsersAsync",
  async () => {
    const responce = await fetch("http://localhost:3000/users");

    console.log("getAllUserasync Is Called");

    return responce.json();
  },
);

const UserSlice = createSlice({
name:"users",
initialState:initialState,
extraReducers:(builder)=>{
    builder.addCase(getAllUsersAsyncAction.fulfilled,(state,action)={
        state.users=action.payload
    })
}
});
// name: "users",
//   initialState: initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getAllUserAsyncAction.fulfilled, (state, action) => {
//       state.users = action.payload;
//     });
export default UserSlice.reducer;
