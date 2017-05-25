import { createStore, combineReducers } from 'redux';
import map from './reducer/map';
import theme from './reducer/theme';
import layers from './reducer/layers';
import tileConfigs from './reducer/tileConfigs';

const store = createStore(
    combineReducers({
        map,
        theme,
        layers,
        tileConfigs,
    })
);

export default store;
