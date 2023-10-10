import React from 'react';
import { Container, Title, Zag, Blok } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const addNewContact = contact => {
    dispatch(addContact(contact));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getVisibleContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm onSubmit={addNewContact} />

      <Zag>Contacts</Zag>
      {contacts.length > 0 ? (
        <Filter value={filter} onChangeFilter={changeFilter} />
      ) : (
        <Blok>It's empty. Add a contact!</Blok>
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={deleteContact}
        />
      )}
    </Container>
  );
};

export default App;