import { createStore, combineReducers } from 'redux';
import map from './reducer/map';

const store = createStore(
    combineReducers({
        map,
    })
);

export default store;
