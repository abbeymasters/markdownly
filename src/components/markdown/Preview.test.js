import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Preview markdown={'hello'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
