import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

const signUp = createAsyncThunk('singUp', ()=>{

})