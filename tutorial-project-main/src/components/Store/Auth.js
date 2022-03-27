import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: { Authenticated: 'none', Role : 'none' },
  reducers: {
    Login(state) {
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