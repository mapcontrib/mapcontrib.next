import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import map from './reducers/map';
import theme from './reducers/theme';
import layers from './reducers/layers';
import tileConfigs from './reducers/tileConfigs';
import osmose from './reducers/osmose';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    map,
    theme,
    layers,
    tileConfigs,
    osmose
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
