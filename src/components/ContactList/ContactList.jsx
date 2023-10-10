import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
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