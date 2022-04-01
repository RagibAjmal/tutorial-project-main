import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: { Authenticated: false , Role : 'none' },
  reducers: {
    Login(state) {
      console.log("Auth")
      state.Authenticated = true;
    },
    Logout(state) {
        state.Authenticated = false;
    },
    Admin(state){
        state.Role='Admin'
    },
    Student(state){
        state.Role='Student'
    }
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;