import { createStore, combineReducers } from 'redux';
import map from 'reducers/map';
import theme from 'reducers/theme';
import layers from 'reducers/layers';
import tileConfigs from 'reducers/tileConfigs';

const store = createStore(
  combineReducers({
    map,
    theme,
    layers,
    tileConfigs
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
