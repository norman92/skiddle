import React from 'react';
import './events.css';

function Input({ onChange, value} : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <label>Search
      <input onChange={onChange} type="search" value={value} placeholder="search for events" className="search" />
    </label>
  );
}

export default Input;
