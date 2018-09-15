import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions/weatherData';
import BarGraph from './barGraph';

import styles from './styles/dashboard.module.css';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  updateSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchData(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
    this.props.dispatch(fetchWeatherData())
  }

  render() {
    return (
      <div>
        <div className={styles.headerBackground}>
          <h1 className={styles.h1}>
            Search cities for 7-day weather history from today
          </h1>
          <section role="search"
            className={styles.form}
          >
            <input
              value={this.state.searchTerm}
              onChange={e => this.updateSearchTerm(e)}
              type="search"
              id="search"
              name="search"
              placeholder="Amsterdam"
              aria-label="Search cities for weather history"
            />
            <button onClick={(e) => this.fetchData(e)}>
              <img src={require('../images/search.svg')} alt="search icon" />
            </button>
          </section>
        </div>
        <BarGraph />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//
// })

export default connect()(Dashboard);
