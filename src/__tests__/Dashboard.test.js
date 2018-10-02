import React from 'react';
import Dashboard from '../components/barGraph';
import { shallow } from 'enzyme';

describe('<Dashboard />', () => {
  it('Should render without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch}/>);
  })
})
