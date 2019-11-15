import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab component', () => {
  it('renders Tab', () => {
    const wrapper = shallow(<Tab title={'1'} handleDelete={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
