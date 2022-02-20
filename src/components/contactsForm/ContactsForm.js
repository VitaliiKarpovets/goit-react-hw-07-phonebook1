import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-action";
import { Form, FormLabel, FormInput, FormButton } from "./ContactsForm.styled";

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return alert(`${name} is already in contacts.`);

    dispatch(actions.addContact({ name, number }));
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
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
        Number
        <FormInput
           type="tel"
          name="number"
          onChange={handleInputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  )
}


// export default class ContactsForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.props.onSubmit(newContact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormLabel>
//           Name
//           <FormInput
//             type="text"
//             name="name"
//             onChange={this.handleInputChange}
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </FormLabel>
//         <FormLabel>
//           Number
//           <FormInput
//             type="tel"
//             name="number"
//             onChange={this.handleInputChange}
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </FormLabel>
//         <FormButton type="submit">Add contact</FormButton>
//       </Form>
//     );
//   }
// }
