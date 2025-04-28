import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const slice = createSlice({
    name: 'addFilter',
    initialState,
    reducers:{
        addFilter: ((state, actions)=> {
            state.name = actions.payload
        })
    }
})

export const selectNameFilter = state => state.filters.name

export const filterReducer = slice.reducer
export const {addFilter} = slice.actions