import { connect } from 'react-redux';

import App from '../component/App';
import {
  setMapTileConfigId,
  setMapMinZoom,
  setMapMaxZoom
} from '../action/map'; // To remove

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setMapTileConfigId: configId => dispatch(setMapTileConfigId(configId)), // To remove
  setMapMinZoom: zoom => dispatch(setMapMinZoom(zoom)), // To remove
  setMapMaxZoom: zoom => dispatch(setMapMaxZoom(zoom)) // To remove
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
