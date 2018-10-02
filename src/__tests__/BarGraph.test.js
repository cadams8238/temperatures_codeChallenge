import React from 'react';
import BarGraph from '../components/barGraph';
import { shallow } from 'enzyme';

describe('<BarGraph />', () => {
  it('Should render without crashing', () => {
    const data = [
      {
        date: "1/31",
        "Max Temp": 45,
        "Min Temp": 28
      },
      {
        date: "2/1",
        "Max Temp": 45,
        "Min Temp": 28
      }
    ];

    shallow(<BarGraph graphData={data}/>);
  })
})
