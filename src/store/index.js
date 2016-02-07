import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

const reduxRouterEnhancer = syncHistory(browserHistory);

const createStoreWithMiddleware = applyMiddleware(
  reduxRouterEnhancer,
  thunk)(createStore);

export default (createStoreWithMiddleware)(combineReducers({
  ...reducers,
  routing: routeReducer
}));

// (window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
