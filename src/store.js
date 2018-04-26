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
      'osmoseCategories',
      JSON.stringify({
        categories: action.categories
      })
    );
  }

  return next(action);
};

const initialOsmoseCategories = JSON.parse(
  window.localStorage.getItem('osmoseCategories') || '{ "categories": [] }'
);

const initialOsmoseSubmitted = JSON.parse(
  window.localStorage.getItem('osmoseSubmitted') || '[]'
);

console.log('Submitted', initialOsmoseSubmitted);

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
  {
    osmose: {
      categories: initialOsmoseCategories.categories,
      submitted: initialOsmoseSubmitted
    }
  },
  composeEnhancers(applyMiddleware(thunk, persistOsmoseCategories))
);

export default store;
