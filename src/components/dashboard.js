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
    this.props.dispatch(fetchWeatherData(this.state.searchTerm))
  }

  render() {
    let cityInfo;

    if (this.props.data) {
      cityInfo = (
        <div className={styles.cityInfo}>
          <h2>{`${this.props.data.name}, ${this.props.data.region}`}</h2>
          <p>{`${this.props.data.country}`}</p>
        </div>
      )
    }

    return (
      <div>
        <div className={styles.headerBackground}></div>
        <h1 className={styles.h1}>
          Search cities for 7-day weather history from today
        </h1>
        <form role="search"
          className={styles.form}
        >
          <input
            value={this.state.searchTerm}
            onChange={e => this.updateSearchTerm(e)}
            type="search"
            id="search"
            name="search"
            placeholder="Amsterdam"
            aria-label="Search cities for 7 day weather history"
          />
          <button onClick={(e) => this.fetchData(e)}>
            <img src={require('../images/search.svg')} alt="search icon" />
          </button>
        </form>
        {cityInfo}
        <BarGraph />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  data: state.data,
  error: state.error
})

export default connect(mapStateToProps)(Dashboard);
