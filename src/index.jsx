import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'osm-ui-react/dist/index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
