import { createSlice } from "@reduxjs/toolkit";
import { changeData, deleteData, fetchData, postData } from "./operations.js";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  contact: null,
};

export const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeContact: (state, action) => {
      state.contact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postData.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        toast("Contact successfully added");
      })
      .addCase(postData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteData.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((item) =>
          action.payload.id === item.id ? action.payload : item,
        );
      })
      .addCase(changeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const contactsReducer = slice.reducer;
export const { changeContact } = slice.actions;
