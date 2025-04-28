import {configureStore} from "@reduxjs/toolkit";
import {contactsReducer} from "./contacts/silce.js";
import {filterReducer} from "./filters/slice.js";
import {authReducers} from "./auth/slice.js";



 export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        filters: filterReducer,
        auth: authReducers
    }
})

