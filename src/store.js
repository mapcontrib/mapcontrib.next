import { createStore, combineReducers } from 'redux';
import map from './reducer/map';
import theme from './reducer/theme';

const store = createStore(
    combineReducers({
        map,
        theme,
    })
);

export default store;
