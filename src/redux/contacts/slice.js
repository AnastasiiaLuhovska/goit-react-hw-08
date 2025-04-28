import {createSlice} from "@reduxjs/toolkit";
import {deleteData, fetchData, postData} from "./operations.js";

const initialState =  {
    items: [],
    isLoading: false,
    error: null
}

 export const slice = createSlice({
     name:'contacts',
     initialState,

     extraReducers: (builder ) => {
         builder
             .addCase(fetchData.pending, (state)=>{
                 state.isLoading = true
                 state.error = false
             })
             .addCase(fetchData.fulfilled, (state, action)=>{
                 state.isLoading = false
                 state.items = action.payload
             })
             .addCase(fetchData.rejected, (state, action)=>{
                 state.isLoading = false
                 state.error = action.payload
             })
             .addCase(postData.pending, (state)=>{
                 state.isLoading = true
                 state.error = false
             })
             .addCase(postData.fulfilled, (state, action)=>{
                 state.isLoading = false
                 state.items.push(action.payload)
             })
             .addCase(postData.rejected, (state, action)=>{
                 state.isLoading = false
                 state.error = action.payload
             })
             .addCase(deleteData.pending, (state)=>{
                 state.isLoading = true
                 state.error = false
             })
             .addCase(deleteData.fulfilled, (state, action)=>{
                 state.isLoading = false
                 state.items = state.items.filter(item => item.id !== action.payload.id)
             })
             .addCase(deleteData.rejected, (state, action)=>{
                 state.isLoading = false
                 state.error = action.payload
             })
     }
 })
export const contactsReducer = slice.reducer


