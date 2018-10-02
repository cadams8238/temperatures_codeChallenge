import React from 'react';
import SearchForm from '../components/searchForm';
import { shallow } from 'enzyme';

describe('<SearchForm />', () => {
  it('Should render without crashing', () => {
    const updateSearchTerm = jest.fn(),
          fetchData = jest.fn(),
          searchTerm = '';
    shallow(<SearchForm
      updateSearchTerm={updateSearchTerm}
      fetchData={fetchData}
      searchTerm={searchTerm}
    />);
  })
})
