import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    initialState: {
        name:'',
        email: '',
        token: ''
    },
    extraReducers{

    }
})

export const authReducers = slice.reducer