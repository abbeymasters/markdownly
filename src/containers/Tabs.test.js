import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';
import store from '../store';
import { Provider } from 'react-redux';

describe('Tabs component', () => {
  it('renders Tabs', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Tabs />);
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
}); 
