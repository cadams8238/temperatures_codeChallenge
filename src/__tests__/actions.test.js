import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_WEATHER_DATA_REQUEST,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR,
  BASE_API_URL,
  fetchWeatherData
} from '../actions/weatherData';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
}

// expected mock API data upon successful fetch
const mockAPIdata = {
    "location": {
        "name": "Portland",
        "region": "Oregon",
        "country": "United States of America",
        "lat": 45.52,
        "lon": -122.68,
        "tz_id": "America/Los_Angeles",
        "localtime_epoch": 1538508909,
        "localtime": "2018-10-02 12:35"
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2018-10-01",
          "date_epoch": 1538352000,
          "day": {
            "maxtemp_c": 19.2,
            "maxtemp_f": 66.6,
            "mintemp_c": 12.2,
            "mintemp_f": 54
          }
        }
      ]
    }
  }

// expected aggregated data upon successful fetch
const data = {
  "country": "United States of America",
  "name": "Portland",
  "region": "Oregon",
  "temps": [
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    },
    {
      "date": "2018-10-01",
      "maxtemp_c": 19.2,
      "maxtemp_f": 66.6,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
    }
  ]
}



describe('Async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  // See reference for testing method here:
  // https://medium.com/@ferrannp/unit-testing-with-jest-redux-async-actions-fetch-9054ca28cdcd
  it('calls request and success actions when fetching weather data is successful', () => {
    const store = mockStore({
      data: null,
      loading: false,
      error: null
    })

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(mockAPIdata))))

      return store.dispatch(fetchWeatherData('portland'))
        .then(() => {
          const expectedActions = [
            { type: FETCH_WEATHER_DATA_REQUEST },
            { type: FETCH_WEATHER_DATA_SUCCESS, data }
          ]
          expect(store.getActions()).toEqual(expectedActions)
        })
  })
})
