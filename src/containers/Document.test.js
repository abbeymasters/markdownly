import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';
import store from '../store';
import { Provider } from 'react-redux';

describe('Document component', () => {
  it('renders Document', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Document />);
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
