import { ContactData, DeleteBtn } from "./ContactsListItem.styled";
import { useDeleteContactMutation } from "../../services/contactsApi";

function ContactsListItem({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ContactData>
        {name}: {number}
      </ContactData>
      <DeleteBtn type="button" disabled={isLoading} onClick={() => deleteContact(id)}>
        {isLoading ? 'Loading...' : 'Delete'}
      </DeleteBtn>
    </>
  );
}

export default ContactsListItem;
