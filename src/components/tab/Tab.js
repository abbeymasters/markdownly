import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ title, handleDelete }) => {
  return (
    <li className={styles.Tab}>
      <input id={title} type="radio" value={title} name="tabs"></input>
      <label htmlFor={title}> TAB {title}</label>
      <button value={title} onClick={() => handleDelete(title)}>X</button>
    </li>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Tab;
