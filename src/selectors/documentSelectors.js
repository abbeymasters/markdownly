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

export const getTabs = state => {
  return state.documentReducer.markdowns;
};

export const getSearchTerm = state => {
  return state.documentReducer.searchTerm;
};


export const getMatchByTitle = state => {
  return Object.entries(getTabs(state))
    .filter(([title]) => title.includes(state.documentReducer.searchTerm))
    .reduce((acc, [title, markdown]) => {
      acc[title] = markdown;
      return acc;
    }, {});
};

export const getMatchTitlesByTitle = state => {
  return Object.keys(getMatchByTitle(state));
};
