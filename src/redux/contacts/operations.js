import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('fetchAll', async(_, thunkAPI)=>{
    try{
        const {data} = await axios.get('https://68076fb6e81df7060eba4161.mockapi.io/contacts/contact')
        return data
    }catch(error){
        return  thunkAPI.rejectWithValue(error.message)
    }
})

export const postData = createAsyncThunk('post', async(contact, thunkAPI)=>{
    try{
        const {data} = await axios.post('https://68076fb6e81df7060eba4161.mockapi.io/contacts/contact', contact)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteData = createAsyncThunk('delete', async(id, thunkAPI)=>{
    try{
        const {data} = await axios.delete(`https://68076fb6e81df7060eba4161.mockapi.io/contacts/contact/${id}`)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})