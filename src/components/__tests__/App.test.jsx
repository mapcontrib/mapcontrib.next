import React from 'react';
import ReactDOM from 'react-dom';
import '../../global';
import App from 'components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
