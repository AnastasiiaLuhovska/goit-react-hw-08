import {createSlice} from "@reduxjs/toolkit";
import {login, logout, refresh, signUp} from './operations.js'

const initialState = {
    isLoggedIn: false,
    isRefreshing: false,
    user: {
        name: '',
        email: ''
    },
    token: null,
    error: null,
    isLoading: false
}
const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(signUp.fulfilled, (state, action)=>{
            state.error = null
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
                state.error = null
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
            .addCase(logout.fulfilled, ()=>{
                return initialState
            })
            .addCase(logout.rejected, (state, action)=>{
                state.error = action.payload
                state.isLoading = false
            })
            .addCase(logout.pending, state=>{
                state.isLoading = true
            })
            .addCase(refresh.fulfilled, (state, action)=>{
                state.user = action.payload
                state.isLoggedIn = true
                state.error = null
                state.isRefreshing = false
            })
            .addCase(refresh.rejected, (state, action)=>{
                state.isLoggedIn = false
                state.error = action.payload
                state.isRefreshing = false
            })
            .addCase(refresh.pending, state=>{
                state.isRefreshing = true
            })
    }
})

export const authReducer = slice.reducer