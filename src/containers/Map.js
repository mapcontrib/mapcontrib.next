import { connect } from 'react-redux';
import MapComponent from 'components/Map';
import { setMapZoom } from 'actions/map';
import { findTileSourcesFromConfigId } from 'helpers/map';

const mapStateToProps = (state, { match, history }) => ({
  zoom: state.map.zoom,
  minZoom: state.map.minZoom,
  maxZoom: state.map.maxZoom,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  layers: Object.values(state.layers).filter(layer => layer.isVisible),
  sources: state.sources,
  submittedErrors: state.osmose.submitted,
  openOsmose: id => history.push(`${match.url}/points/osmose/${id}`)
});

const mapDispatchToProps = {
  setMapZoom
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
