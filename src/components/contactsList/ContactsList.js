import ContactsListItem from "../contactsListItem/ContactsListItem";
import { useDispatch, useSelector } from "react-redux";
import { ListContainer, ListElement, List } from "./ContactsList.styled";
import * as actions from "../../redux/contacts/contacts-action";

export default function ContactsList() {
  const contactsList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact =(id)=>{
    dispatch(actions.removeContact(id))
  }

  return (
    <>
      <ListContainer>
        <List>
          {filteredContacts().map(({ id, name, number }) => (
            <ListElement key={id}>
              <ContactsListItem
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </ListElement>
          ))}
        </List>
      </ListContainer>
    </>
  );
}
