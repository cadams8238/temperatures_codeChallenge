import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR
} from '../actions/weatherData';

const initialState = {
  data: null,
  loading: false,
  error: null
}

const weatherData = (state = initialState, action) => {
  if (action.type === FETCH_WEATHER_DATA_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  else if (action.type === FETCH_WEATHER_DATA_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data
    };
  }
  else if (action.type === FETCH_WEATHER_DATA_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }

  return state;
}

export default weatherData;
