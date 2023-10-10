import React from 'react';
import { Div, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={handleChange} />
      </Label>
    </Div>
  );
};

export default Filter;