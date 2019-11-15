import { UPDATE_MARKDOWN, updateMarkdown, ADD_TAB, addTab, DELETE_TAB, deleteTab, ADD_SEARCH, addSearch, GET_MATCH_TITLE, getMatchTitle } from './documentActions';

describe('document actions', () => {
  it('updates markdown', () => {
    let updatedInput;
    expect(updateMarkdown(updatedInput)).toEqual({
      type: UPDATE_MARKDOWN,
      payload: updatedInput
    });
  });

  it('adds a tab', () => {
    let title;
    expect(addTab(title)).toEqual({
      type: ADD_TAB,
      payload: title
    });
  });

  it('deletes a tab', () => {
    let title;
    expect(deleteTab(title)).toEqual({
      type: DELETE_TAB,
      payload: title
    });
  });

  it('adds a search', () => {
    let searchByTitle;
    expect(addSearch(searchByTitle)).toEqual({
      type: ADD_SEARCH,
      payload: searchByTitle
    });
  });

  it('gets match title', () => {
    let searchTerm;
    expect(getMatchTitle(searchTerm)).toEqual({
      type: GET_MATCH_TITLE,
      payload: searchTerm
    });
  });
});
