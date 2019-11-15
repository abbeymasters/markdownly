import { UPDATE_MARKDOWN, ADD_TAB, DELETE_TAB, ADD_SEARCH } from '../actions/documentActions';

const initialState = {
  active: 'default',
  markdowns: {
    default: '# hi there',
  },
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdowns: { ...state.markdowns, [state.active]: action.payload } };
    case ADD_TAB:
      return { ...state, markdowns: { ...state.markdowns, [action.payload]: `# ${action.payload}` } };
    case DELETE_TAB:
      delete state.markdowns[action.payload];
      return { ...state };
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };
    // case GET_MATCH_TITLE:
    //   return { ...state, markdowns: {} };
    default:
      return state;
  }
}
