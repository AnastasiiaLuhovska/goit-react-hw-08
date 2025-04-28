import {createSlice} from "@reduxjs/toolkit";
import {login, signUp} from './operations.js'

const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user:{
            name:'',
            email: ''
        },
        token: null,
        error: null,
        isLoading: false
    },
    extraReducers: (builder)=>{
        builder.addCase(signUp.fulfilled, (state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
            state.isLoading = false
        })
            .addCase(signUp.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading = false
            })
            .addCase(signUp.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
                state.isLoading = false

            } )
            .addCase(login.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading = false
        })
            .addCase (login.pending, (state)=>{
                state.isLoading = true
            })
    }
})

export const authReducer = slice.reducer