import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

// import Enzyme, { shallow } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16'
// Enzyme.configure({ adapter: new EnzymeAdapter() })


describe('Gift', () => {
  const gift = shallow(<Gift />);
});