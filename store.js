import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherData from './reducers/weather';

const store = createStore(
  weatherData,
  applyMiddleware(thunk)
);

export default store;
