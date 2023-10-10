import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name} : {contact.number}
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;