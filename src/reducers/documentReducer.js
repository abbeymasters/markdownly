import { UPDATE_MARKDOWN, SWITCH_TABS, ADD_TAB, DELETE_TAB, ADD_SEARCH } from '../actions/documentActions';

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
      return { ...state, active: action.payload, markdowns: { ...state.markdowns, [action.payload]: '' } };
    case SWITCH_TABS:
      return { ...state, active: action.payload };
    case DELETE_TAB:
      if(action.payload === 'default') console.log('Cannot delete default file!');
      else delete state.markdowns[action.payload];
      return { ...state, active: 'default' };
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
