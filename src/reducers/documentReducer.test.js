import React from 'react';
import { shallow } from 'enzyme';
import reducer from '../reducers/index';
import { updateMarkdown, addTab } from '../actions/documentActions';

describe('documentReducer component', () => {
  it('renders documentReducer', () => {
    const wrapper = shallow(<documentReducer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles unknown case', () => {
    const newState = reducer(undefined, { type: 'thing' });
    expect(newState.documentReducer).toEqual({
      active: 'default',
      markdowns: {
        default: '# hi there',
      },
      searchTerm: ''
    });
  });

  it('handles update markdown case', () => {
    const state = {
      active: 'default',
      markdowns: {
        default: '# hi there',
      },
      searchTerm: ''
    };

    const action = updateMarkdown('yo whats up');
    const newState = reducer(state.documentReducer, action);

    expect(newState.documentReducer).toEqual({
      ...state,
      markdowns: { ...state.markdowns, default: 'yo whats up' }
    });
  });

  it('handles adding a tab case', () => {
    const state = {
      active: 'default',
      markdowns: {
        default: '# hi there',
      },
      searchTerm: ''
    };
   
    const action = addTab('1');
    const newState = reducer(state.documentReducer, action);

    expect(newState.documentReducer).toEqual({
      ...state,
      markdowns: { ...state.markdowns, 1: '# 1' }
    });
  });
});
