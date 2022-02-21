import ContactsListItem from "../contactsListItem/ContactsListItem";
import { useSelector } from "react-redux";
import { ListContainer, ListElement, List } from "./ContactsList.styled";
import {useGetContactQuery} from '../../services/contactsApi'

export default function ContactsList() {
  const filter = useSelector(state => state.filter);

  const { data, isFetching } = useGetContactQuery();

  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };


  return (
    <>
      <ListContainer>
        <List>
          {data && !isFetching ? (
            filteredContacts().map(({ id, name, phone }) => (
              <ListElement key={id}>
                <ContactsListItem
                  id={id}
                  name={name}
                  number={phone}
                />
              </ListElement>
            ))
          ) : (<h1>Loading...</h1>)  
          }
        </List>
      </ListContainer>
    </>
  );
}
