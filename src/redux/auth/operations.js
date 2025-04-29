import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from '../../api/api.js'

const addToken = (token)=>{
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export const signUp = createAsyncThunk('singUp', async (user, thunkAPI)=>{
    try{
        const {data} = await instance.post('/users/signup', user)
        addToken(data.token)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }

})

export const login = createAsyncThunk('login', async (user, thunkAPI)=>{
    try{
        const {data} = await instance.post('/users/login', user)
        addToken(data.token)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('logout', async(_, thunkAPI)=>{
    try{
        await instance.post('/users/logout')
        addToken('')
    }catch(error){
        thunkAPI.rejectWithValue(error.message)
    }
})

export const refresh = createAsyncThunk('refresh', async(_, thunkAPI)=>{
    const token = thunkAPI.getState().auth.token

    if(!token) return thunkAPI.rejectWithValue('no token')

    addToken(token)
    try{
        const {data} = await instance.get('users/current')
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})