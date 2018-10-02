import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions/weatherData';

import SearchForm from './searchForm';
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

  updateSearchTerm(value) {
    this.setState({
      searchTerm: value
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
    let show;

    if (this.props.data && !this.props.loading && !this.props.error) {
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

      show = (
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
      show = (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height="100"
          width="100"
        />
      )
    }

    if (this.props.error) {
      show = (
        <p>You've entered an incorrect input. Please try again.</p>
      )
    }

    return (
      <div>
        <div className={styles.headerBackground}></div>
        <h1 className={styles.h1}>
          Search cities for 7-day weather history from today
        </h1>
        <SearchForm
          searchTerm={this.state.searchTerm}
          updateSearchTerm={value => this.updateSearchTerm(value)}
          fetchData={e => this.fetchData(e)}
        />
        { show }
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
