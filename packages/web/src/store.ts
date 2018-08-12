import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import layers from './reducers/layers';
import map from './reducers/map';
import osmose from './reducers/osmose';
import sources from './reducers/sources';
import theme from './reducers/theme';
import tileConfigs from './reducers/tileConfigs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    layers,
    map,
    osmose,
    sources,
    theme,
    tileConfigs,
  }),
  composeEnhancers(
    applyMiddleware(thunk),
    persistState(['osmose', 'layers', 'sources'])
  )
);

export default store;
