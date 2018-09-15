require('dotenv').config();
const BASE_API_URL = "http://api.apixu.com/v1/history.json?key=";

export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST'
const fetchWeatherDataRequest = () => ({
  type: FETCH_WEATHER_DATA_REQUEST
})

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = data => ({
  type: FETCH_WEATHER_DATA_SUCCESS,
  data
})

export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';
const fetchWeatherDataError = error => ({
  type: FETCH_WEATHER_DATA_ERROR,
  error
})

export const fetchWeatherData = () => dispatch => {
  // console.log(process.env.REACT_APP_API_KEY);
  dispatch(fetchWeatherDataRequest)
  return (
    fetch(`${BASE_API_URL}0e565417ca764b0d86b191522181409&q=Istanbul&dt=2018-9-14`)
      .then(response => response.json())
      .then(res => console.log(res))
  );
}
