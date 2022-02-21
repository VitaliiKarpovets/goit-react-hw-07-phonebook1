import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./contacts-action";


export const filter = createReducer('', {
    [filterContact]: (_, {payload}) => payload,
})



