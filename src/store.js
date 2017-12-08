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
  })
);

export default store;
