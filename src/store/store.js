import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../reducers/jobs';
import errorsReducer from '../reducers/errors';
import favoritesReducer from '../reducers/favourites';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    jobs: jobsReducer,
    errors: errorsReducer,
    favourites: favoritesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;