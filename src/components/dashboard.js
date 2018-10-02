import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions/weatherData';

import BarGraph from './barGraph';
import Loader from 'react-loader-spinner';

import styles from './styles/dashboard.module.css';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      fahrenheit: true
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

  toggleTemperature() {
    this.setState({
      fahrenheit: !this.state.fahrenheit
    })
  }

  render() {
    let weatherInfo, loading, error;

    if (this.props.data) {
      let graphData;

      if (this.state.fahrenheit) {
        graphData = this.props.data.temps.map(day => ({
          date: day.date,
          "Max Temp": day.maxtemp_f,
          "Min Temp": day.mintemp_f
        }))
      }
      else if (!this.state.fahrenheit) {
        graphData = this.props.data.temps.map(day => ({
          date: day.date,
          "Max Temp": day.maxtemp_c,
          "Min Temp": day.mintemp_c
        }))
      }

      weatherInfo = (
        <React.Fragment>
          <div className={styles.cityInfo}>
            <div>
              <h2>{`${this.props.data.name}, ${this.props.data.region}`}</h2>
              <p>{`${this.props.data.country}`}</p>
            </div>
            <input className={styles.toggle}
              type="checkbox"
              onChange={() => this.toggleTemperature()}
            />
          </div>
          <BarGraph graphData={graphData}/>
        </React.Fragment>
      )
    }

    if (this.props.loading) {
      loading = (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height="100"
          width="100"
        />
      )
    }

    if (this.props.error) {
      error = (
        <p>{this.props.error}</p>
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
        {error}
        {this.props.loading ? loading : weatherInfo}
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
