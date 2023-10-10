import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Перевірка, чи контакт вже існує
    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      alert(`Contact with the name ${name} already exists.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;