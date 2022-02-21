import { useState } from "react";
import {useGetContactQuery, useAddContactMutation } from '../../services/contactsApi';
import { Form, FormLabel, FormInput, FormButton } from "./ContactsForm.styled";

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, {isLoading}] = useAddContactMutation();
  const { data } = useGetContactQuery();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      data.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return alert(`${name} is already in contacts.`);

    addContact({ name, phone });
    reset();
  }

  const reset = () => {
    setName('');
    setPhone('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Phone Number
        <FormInput
           type="tel"
          name="phone"
          onChange={handleInputChange}
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Add contact'}
      </FormButton>
    </Form>
  )
}


