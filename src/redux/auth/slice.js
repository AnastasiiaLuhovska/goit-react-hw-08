import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, signUp } from "./operations.js";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  isLoggedIn: false,
  isRefreshing: false,
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoading: false,
};
const createToast = (message) => {
  toast(`Something went wrong ${message}`);
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        createToast(action.payload);
        state.isLoading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        createToast(action.payload);
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, (state, action) => {
        createToast(action.payload);
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      });
  },
});

export const authReducer = slice.reducer;
