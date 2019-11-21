import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabDeck = ({ titles, handleDelete, handleSwitch }) => {
  const tabItems = titles.map(title => {
    return (
      <Tab handleDelete={handleDelete} handleSwitch={handleSwitch} key={title} title={title} />
    );
  });

  return (
    <ul>
      {tabItems}
    </ul>
  );
};

TabDeck.propTypes = {
  titles: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired
};

export default TabDeck;
