import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/tab/TabDeck';
import { connect } from 'react-redux';
import { getSearchTerm, getMatchTitlesByTitle } from '../selectors/documentSelectors';
import { addTab, deleteTab, addSearch, getMatchTitle } from '../actions/documentActions';
import Filter from '../components/filter/Filter';

const Tabs = ({ handleClick, titles, handleDelete, handleChange, handleSubmit, searchTerm }) => {
  return (
    <>
      <TabDeck handleDelete={handleDelete} titles={titles} />
      <button onClick={() => handleClick(titles.length)}>ADD</button>
      <Filter handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm} />
    </>
  );
};

const mapStateToProps = state => ({
  titles: getMatchTitlesByTitle(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick(tabNumber) {
    dispatch(addTab(tabNumber));
  },
  handleDelete(title) {
    dispatch(deleteTab(title));
  },
  handleSubmit(searchTerm) {
    event.preventDefault();
    dispatch(getMatchTitle(searchTerm));
  },
  handleChange({ target }) {
    event.preventDefault();
    dispatch(addSearch(target.value));
  }
});

Tabs.propTypes = {
  titles: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);


