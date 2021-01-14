import React from 'react';
import Gift from './Gift';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new EnzymeAdapter() })


describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and a gift in `state', () => {
    expect(gift.state()).toEqual({person: '', present: ''});
  });
});