import weatherReducer from '../reducers/weather';
import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR
} from '../actions/weatherData';

describe('Weather Reducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual({
      data: null,
      loading: false,
      error: null
    })
  })

  it('should handle FETCH_WEATHER_DATA_REQUEST', () => {
    expect(
      weatherReducer({
        data: null,
        loading: false,
        error: null
      }, {
        type: FETCH_WEATHER_DATA_REQUEST
      })
    ).toEqual({
      data: null,
      loading: true,
      error: null
    })
  })

  it('should handle FETCH_WEATHER_DATA_SUCCESS', () => {
    expect(
      weatherReducer({
        data: null,
        loading: true,
        error: null
      }, {
        type: FETCH_WEATHER_DATA_SUCCESS,
        data: {}
      })
    ).toEqual({
      data: {},
      loading: false,
      error: null
    })
  })

  it('should handle FETCH_WEATHER_DATA_ERROR', () => {
    expect(
      weatherReducer({
        data: null,
        loading: true,
        error: null
      }, {
        type: FETCH_WEATHER_DATA_ERROR,
        error: {}
      })
    ).toEqual({
      data: null,
      loading: false,
      error: {}
    })
  })

})
