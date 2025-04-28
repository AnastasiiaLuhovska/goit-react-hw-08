import {createSlice} from "@reduxjs/toolkit";
import {signUp} from './operations.js'

const slice = createSlice({
    name: 'user',
    initialState: {
        name:'',
        email: '',
        password: ''
    },
    extraReducers: (builder)=>{
        builder.addCase(signUp.fulfilled, (state, action)=>{
            state = action.payload
        })
    }
})

export const authReducers = slice.reducer