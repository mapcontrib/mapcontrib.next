import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import map from './reducers/map';
import theme from './reducers/theme';
import layers from './reducers/layers';
import sources from './reducers/sources';
import tileConfigs from './reducers/tileConfigs';
import osmose from './reducers/osmose';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    map,
    theme,
    layers,
    sources,
    tileConfigs,
    osmose
  }),
  composeEnhancers(
    applyMiddleware(thunk),
    persistState(['osmose', 'layers', 'sources'])
  )
);

export default store;
