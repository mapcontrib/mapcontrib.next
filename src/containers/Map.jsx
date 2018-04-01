import { connect } from 'react-redux';
import MapComponent from '../components/Map';
import { setMapZoom } from '../actions/map';
import { findTileSourcesFromConfigId } from '../helpers/map';

const mapStateToProps = state => ({
  zoom: state.map.zoom,
  minZoom: state.map.minZoom,
  maxZoom: state.map.maxZoom,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  layers: state.layers
});

const mapDispatchToProps = {
  setMapZoom
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
