import React from 'react';
import PropTypes from 'prop-types';
import { Div, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;