/* eslint-disable import/no-webpack-loader-syntax */
import 'expose-loader?$!jquery';
import 'expose-loader?jQuery!jquery';
import 'expose-loader?L!leaflet';
/* eslint-enable */

// import './global';

import App from 'containers/App';
import 'osm-ui-react/dist/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
