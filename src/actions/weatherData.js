import moment from 'moment';
// require('dotenv').config();
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

export const encodeSpaces = searchTerm => {
  let encodedSearch = '';

  for (let i = 0; i < searchTerm.length; i++) {
    if (searchTerm[i] === ' ') {
      encodedSearch += '%20';
    }
    else {
      encodedSearch += searchTerm[i];
    }
  }
  return encodedSearch;
}

export const getWeatherHistoryData = () => {
  let dates = [];

  for (let i = 0; i < 7; i++) {
    console.log(i);
    if (i === 0) {
      dates.push(moment().format('YYYY-M-D'))
    }
    else {
      dates.push(moment().subtract(i, 'days').format('YYYY-M-D'))
    }
  }
  return dates;
}



export const fetchWeatherData = searchTerm => dispatch => {
  // console.log(process.env.REACT_APP_API_KEY);
  dispatch(fetchWeatherDataRequest)


  const search = encodeSpaces(searchTerm);
  console.log(getWeatherHistoryData());


  return (
    fetch(`${BASE_API_URL}0e565417ca764b0d86b191522181409&q=${search}&dt=2018-9-14`)
      .then(response => response.json())
      .then(res => console.log(res))
  );
}
