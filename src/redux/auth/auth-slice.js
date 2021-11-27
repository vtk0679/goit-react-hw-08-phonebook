import { createSlice } from "@reduxjs/toolkit";
import { actions, register, logIn, logOut, fetchCurrentUser } from "redux/auth";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
  isFetchCurrentUser: false,
  isRegisterError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRegisterError = false;
    },

    [actions.errorReset](state, action) {
      state.isRegisterError = false;
    },

    [register.rejected](state, action) {
      state.isRegisterError = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
