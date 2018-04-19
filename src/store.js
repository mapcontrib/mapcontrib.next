import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import map from './reducers/map';
import theme from './reducers/theme';
import layers from './reducers/layers';
import layerSourceFeatures from './reducers/layerSourceFeatures';
import tileConfigs from './reducers/tileConfigs';
import osmose from './reducers/osmose';
import { OSMOSE_ADD_CATEGORIES } from './actions/osmose';

// FIXME - To remove
const persistOsmoseCategories = store => next => action => {
  if (action.type === OSMOSE_ADD_CATEGORIES) {
    window.localStorage.setItem(
      'osmoseStore',
      JSON.stringify({
        categories: action.categories
      })
    );
  }

  return next(action);
};

const initialOsmoseStore = JSON.parse(
  window.localStorage.getItem('osmoseStore') || '{ "categories": [] }'
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    map,
    theme,
    layers,
    layerSourceFeatures,
    tileConfigs,
    osmose
  }),
  { osmose: initialOsmoseStore },
  composeEnhancers(applyMiddleware(thunk, persistOsmoseCategories))
);

export default store;
