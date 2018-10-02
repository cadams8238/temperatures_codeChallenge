import React from 'react';

import styles from './styles/form.module.css';

export const SearchForm = ({ searchTerm, updateSearchTerm, fetchData }) => {
  return (
    <form role="search"
      className={styles.form}
    >
      <input
        value={searchTerm}
        onChange={e => updateSearchTerm(e.target.value)}
        type="search"
        id="search"
        name="search"
        placeholder="Amsterdam"
        aria-label="Search cities for 7 day weather history"
      />
      <button onClick={e => fetchData(e)}>
        <img src={require('../images/search.svg')} alt="search icon" />
      </button>
    </form>
  );
}

export default SearchForm;
