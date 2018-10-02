import moment from 'moment';
export const BASE_API_URL = "http://api.apixu.com/v1/history.json?key=";


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

export const getWeatherHistoryDates = () => {
  let dates = [];

  for (let i = 0; i < 7; i++) {
    if (i === 0) {
      dates.push(moment().format('YYYY-M-D'))
    }
    else {
      dates.push(moment().subtract(i, 'days').format('YYYY-M-D'))
    }
  }
  return dates;
}

export const createURLs = (dates, search) => {
  return dates.map(date => `${BASE_API_URL}${process.env.REACT_APP_API_KEY}&q=${search}&dt=${date}`);
}

export const aggregateData = (apiResponse) => {
  let data = {};

  for (let i = apiResponse.length - 1; i >= 0; i--) {
    if (i === apiResponse.length - 1) {
      data = {
        name: apiResponse[i].location.name,
        region: apiResponse[i].location.region,
        country: apiResponse[i].location.country,
        temps: [
          {
            date: apiResponse[i].forecast.forecastday[0].date,
            maxtemp_c: apiResponse[i].forecast.forecastday[0].day.maxtemp_c,
            mintemp_c: apiResponse[i].forecast.forecastday[0].day.mintemp_c,
            maxtemp_f: apiResponse[i].forecast.forecastday[0].day.maxtemp_f,
            mintemp_f: apiResponse[i].forecast.forecastday[0].day.mintemp_f
          }
        ]
      }
    }
    else {
      data.temps.push({
        date: apiResponse[i].forecast.forecastday[0].date,
        maxtemp_c: apiResponse[i].forecast.forecastday[0].day.maxtemp_c,
        mintemp_c: apiResponse[i].forecast.forecastday[0].day.mintemp_c,
        maxtemp_f: apiResponse[i].forecast.forecastday[0].day.maxtemp_f,
        mintemp_f: apiResponse[i].forecast.forecastday[0].day.mintemp_f
      })
    }
  }
  return data;
}



export const fetchWeatherData = searchTerm => dispatch => {
  dispatch(fetchWeatherDataRequest())

  const search = encodeSpaces(searchTerm);
  const weatherHistoryDates = getWeatherHistoryDates();
  const urls = createURLs(weatherHistoryDates, search);

  return (
    Promise.all(urls.map(url =>
      fetch(url)
        .then(res => res.json())
    ))
      .then(res => aggregateData(res))
      .then(data => dispatch(fetchWeatherDataSuccess(data)))
      .catch(err => dispatch(fetchWeatherDataError(err)))
  );
}
