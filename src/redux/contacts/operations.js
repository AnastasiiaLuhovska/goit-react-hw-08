import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from '../../api/api.js'

export const fetchData = createAsyncThunk('fetchAll', async(_, thunkAPI)=>{
    try{
        const {data} = await instance.get('/contacts')
        return data
    }catch(error){
        return  thunkAPI.rejectWithValue(error.message)
    }
})

export const postData = createAsyncThunk('post', async(contact, thunkAPI)=>{
    try{
        const {data} = await instance.post('/contacts', contact)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteData = createAsyncThunk('delete', async(id, thunkAPI)=>{
    try{
        const {data} = await instance.delete(`/contacts/${id}`)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})