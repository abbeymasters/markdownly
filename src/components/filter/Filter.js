import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleSubmit, handleChange, searchTerm }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}></input>
      <button onClick={() => handleSubmit(searchTerm)}>Search</button>
    </form>

  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default Filter; 
