require('dotenv').config();
const API_URL =

export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST'
const fetchWeatherDataRequest = () => ({
  type: FETCH_WEATHER_DATA_REQUEST
})

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = needsWatering => ({
  type: FETCH_WEATHER_DATA_SUCCESS,
  needsWatering
})

export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';
const fetchWeatherDataError = error => ({
  type: FETCH_WEATHER_DATA_ERROR,
  error
})

export const fetchWeatherData = dispatch => {
  dispatch(fetchWeatherDataRequest)
  return (
    fetch(`http://api.apixu.com/v1/history.json?key=${REACT_APP_API_KEY}&q=Istanbul&dt=2018-9-14`)
      .then(response => response.json())
      .then(res => console.log(res))
  );
}
