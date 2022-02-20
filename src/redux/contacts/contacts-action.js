import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction('contacts/add', text => ({
    payload: {
        id: shortid.generate(),
        ...text
    }
}));

export const removeContact = createAction('contacts/remove');

export const filterContact = createAction('contact/filter');