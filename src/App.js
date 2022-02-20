import Filter from "./components/filter/Filter";
import ContactsList from "./components/contactsList/ContactsList";
import ContactsForm from "./components/contactsForm/ContactsForm";

export default function App() {
  return (
    <div>
       <h1>Phonebook</h1>
       <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
  


}


// export default class App extends Component {
//   state = {
//     contacts: [
//       // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);

//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addNewContact = (contactName) => {
//     if (
//       this.state.contacts.some((contact) => contact.name.toLowerCase() === contactName.name.toLowerCase())
//     ) {
//       return alert(`${contactName.name}  is already in contacts.`);
//     } else {
//       this.setState((prevState) => ({
//         contacts: [contactName, ...prevState.contacts],
//       }));
//     }
//   };

//   deleteContact = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   filterContact = (event) => {
//     this.setState({ filter: event.target.value });
//   };

//   filterAllContacts = (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContact = this.filterAllContacts(contacts, filter);
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactsForm onSubmit={this.addNewContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChangeFilter={this.filterContact} />
//         <ContactsList
//           contacts={filteredContact}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
