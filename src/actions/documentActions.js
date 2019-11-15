export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = updatedInput => ({
  type: UPDATE_MARKDOWN,
  payload: updatedInput
});

export const ADD_TAB = 'ADD_TAB';
export const addTab = title => ({
  type: ADD_TAB,
  payload: title
});

export const DELETE_TAB = 'DELETE_TAB';
export const deleteTab = title => ({
  type: DELETE_TAB,
  payload: title
});

export const ADD_SEARCH = 'ADD_SEARCH';
export const addSearch = searchByTitle => ({
  type: ADD_SEARCH,
  payload: searchByTitle
});

export const GET_MATCH_TITLE = 'GET_MATCH_TITLE';
export const getMatchTitle = searchTerm => ({
  type: GET_MATCH_TITLE,
  payload: searchTerm
});

