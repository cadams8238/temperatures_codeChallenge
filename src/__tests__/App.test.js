import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('Should render without crashing', () => {
    shallow(<App />);
  });
});
