import React from 'react';
import { shallow } from 'enzyme';
import TabDeck from './TabDeck';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<TabDeck titles={[]} handleDelete={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
