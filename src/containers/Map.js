import { connect } from 'react-redux';
import MapComponent from 'components/Map';
import { setMapZoom } from 'actions/map';
import { findTileSourcesFromConfigId } from 'helpers/map';

const mapStateToProps = (state, { match, history }) => ({
  zoom: state.map.zoom,
  minZoom: state.map.minZoom,
  maxZoom: state.map.maxZoom,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  layers: state.layers,
  layerSourceFeatures: state.layerSourceFeatures,
  openOsmose: id => history.push(`${match.url}/edition/osmose/${id}`)
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setMapZoom
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
