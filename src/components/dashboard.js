import React, { Component } from 'react';
import BarGraph from './barGraph';
import styles from './styles/dashboard.module.css';

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className={styles.headerBackground}>
          <h1 className={styles.h1}>
            Search cities for 7-day weather history from today
          </h1>
          <form role="search"
            className={styles.form}
          >
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Amsterdam"
              aria-label="Search cities for weather history"
            />
            <button>Search</button>
          </form>
        </div>
        <BarGraph />
      </div>
    );
  }
}
