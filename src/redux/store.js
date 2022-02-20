import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./contacts/contacts-reducer";


export default configureStore({ reducer: combineReducers });