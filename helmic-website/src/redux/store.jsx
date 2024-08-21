import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Correctly import `thunk` as a default export

import { alertsReducer } from './reducers/alertsReducer';
import { carsReducer } from './reducers/carsReducer';  
import { bookingsReducer } from './reducers/bookingsReducer';

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  cars: carsReducer,
  alerts: alertsReducer,
  bookings: bookingsReducer,
});

// Setup the Redux store with middleware and DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) // Apply middleware
  )
);

export default store;
