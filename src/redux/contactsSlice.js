import {createSelector, createSlice} from "@reduxjs/toolkit";
import {deleteData, fetchData, postData} from "./contactsOps.js";

const initialState =  {
    items: [],
    isLoading: false,
    error: null
}

 export const contactsSlice = createSlice({
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
export const contactsReducer = contactsSlice.reducer

export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.isLoading
export const selectError = state => state.contacts.error
export const selectFilter = state => state.filters.name

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter)=>{
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.toLowerCase().includes(filter.toLowerCase()))
    }
)
