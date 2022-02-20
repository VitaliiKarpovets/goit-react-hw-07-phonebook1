import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, removeContact, filterContact } from "./contacts-action";

const contactsList = JSON.parse(localStorage.getItem('contacts')) ?? [];

const contacts = createReducer(contactsList, {

    [addContact]: (state, { payload }) => {
        const newContact = [...state, payload];
        localStorage.setItem('contacts', JSON.stringify(newContact));
        return newContact;
    },

    [removeContact]: (state, action) => {
        const newContact = state.filter(contact => contact.id !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(newContact));
        return newContact;
    }

});

const filter = createReducer('', {
    [filterContact]: (_, {payload}) => payload,
})

export default combineReducers({
    contacts,
    filter
})


