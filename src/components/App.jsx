import React from 'react';
import { Container, Title, Zag, Blok } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <Zag>Contacts</Zag>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Blok>It's empty. Add a contact!</Blok>
      )}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};

export default App;