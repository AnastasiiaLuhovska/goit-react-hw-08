import {createSlice} from "@reduxjs/toolkit";
import {signUp} from './operations.js'

const slice = createSlice({
    initialState: {
        name:'',
        email: '',
        password: ''
    },
    extraReducers: (builder)=>{
        builder.addCase(signUp.fullfilled, (state, action)=>{
            state = action.payload
        })
    }
})

export const authReducers = slice.reducer