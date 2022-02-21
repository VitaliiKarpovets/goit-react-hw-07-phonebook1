import { configureStore } from "@reduxjs/toolkit";
import { filter } from "./contacts/contacts-reducer";
import { contactsApi } from "../services/contactsApi";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter
    },
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), contactsApi.middleware]
})

setupListeners(store.dispatch);