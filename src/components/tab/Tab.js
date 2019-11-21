import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, handleDelete, handleSwitch }) => {
  return (
    <li>
      <input onClick={() => handleSwitch(title)} type="radio" value={title} name="tabs"></input>
      <label htmlFor={title}> TAB {title} </label><br />
      <button value={title} onClick={() => handleDelete(title)}>X</button>
    </li>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired
};

export default Tab;
