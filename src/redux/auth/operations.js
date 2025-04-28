import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

export const signUp = createAsyncThunk('singUp', async (data, thunkAPI)=>{
    try{
        const response = await instance.post('users/signup', data)
        return response
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }

})
