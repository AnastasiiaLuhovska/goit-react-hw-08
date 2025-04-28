import {configureStore} from "@reduxjs/toolkit";
import {contactsReducer} from "./contacts/slice.js";
import {filterReducer} from "./filters/slice.js";
import {authReducer} from "./auth/slice.js";



 export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        filters: filterReducer,
        auth: authReducer,
    }
})

