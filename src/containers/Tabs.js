import React from 'react';
import TabDeck from '../components/tab/TabDeck';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchTerm, getMatchTitlesByTitle } from '../selectors/documentSelectors';
import { addTab, deleteTab, switchTabs, addSearch, getMatchTitle } from '../actions/documentActions';
import Filter from '../components/filter/Filter';

export default function Tabs() {
  const titles = useSelector(state => getMatchTitlesByTitle(state));
  const searchTerm = useSelector(state => getSearchTerm(state));

  const dispatch = useDispatch();
  const handleClick = tabNumber => dispatch(addTab(tabNumber));
  const handleDelete = title => dispatch(deleteTab(title));
  const handleSwitch = title => dispatch(switchTabs(title));
  const handleSubmit = searchTerm => {
    event.preventDefault();
    dispatch(getMatchTitle(searchTerm));
  };
  const handleChange = ({ target }) => {
    event.preventDefault();
    dispatch(addSearch(target.value));
  };

  return (
    <>
      <TabDeck handleDelete={handleDelete} handleSwitch={handleSwitch} titles={titles} />
      <button onClick={() => handleClick(titles.length)}>ADD</button>
      <Filter handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm} />
    </>
  );
}

