import React from 'react';
import ReactDOM from 'react-dom';
import '../../global';
import App from 'components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <App
      setMapTileConfigId={jest.fn()}
      setMapMinZoom={jest.fn()}
      setMapMaxZoom={jest.fn()}
      setFragment={jest.fn()}
    />,
    div
  );
});
