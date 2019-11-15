export const getActiveTab = state => {
  return state.documentReducer.active;
};

export const getMarkdown = state => {
  const active = getActiveTab(state);
  return state.documentReducer.markdowns[active];
};

export const getTitles = state => {
  return Object.keys(state.documentReducer.markdowns);
};

export const deleteTab = state => {
  return state.documentReducer.markdowns;
};

export const getSearchTerm = state => {
  return state.documentReducer.getSearchTerm;
};
