import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Filter handleSubmit={() => {}} handleChange={() => {}} searchTerm={'hello'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
