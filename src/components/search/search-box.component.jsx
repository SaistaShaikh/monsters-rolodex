import React from 'react';
import './search-box.component.css';

export const Search = ({placeholder,handleChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
