import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
          console.log('Deleting contact with ID:', contactId);
    dispatch(removeContact(contactId));
  console.log('Contacts:', contacts);


  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          <Button
            type="button"
            name="delete"
            onClick={() => handleDelete(contact.id)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;





