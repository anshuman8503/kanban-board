import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/tasksSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      label="Search tasks..."
      variant="outlined"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;