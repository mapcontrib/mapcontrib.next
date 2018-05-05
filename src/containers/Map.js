import { connect } from 'react-redux';
import MapComponent from 'components/Map';
import { sourceTypes } from 'const/layers';
import { nectarivore } from 'helpers/requests';
import { setMapZoom } from 'actions/map';
import { addLayer, addSourceToLayerById } from 'actions/layers';
import { addSource, addFeaturesToSourceById } from 'actions/sources';
import { findTileSourcesFromConfigId } from 'helpers/map';

const mapStateToProps = (state, { match, history }) => ({
  zoom: state.map.zoom,
  minZoom: state.map.minZoom,
  maxZoom: state.map.maxZoom,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  layers: state.layers,
  sources: state.sources,
  submittedErrors: state.osmose.submitted,
  openOsmose: id => history.push(`${match.url}/edition/osmose/${id}`)
});

const mapDispatchToProps = {
  setMapZoom,
  addLayer,
  addSource,
  addSourceToLayerById,
  addFeaturesToSourceById
};

const mergeProps = (stateProps, dispatchProps) => {
  const {
    addLayer,
    addSource,
    addSourceToLayerById,
    addFeaturesToSourceById
  } = dispatchProps;

  return {
    ...stateProps,
    setMapZoom: dispatchProps.setMapZoom,
    addOsmoseLayer: id => {
      const source = {
        id: id,
        type: sourceTypes.OSMOSE,
        leafletLayer: nectarivore.createOsmose(id, features =>
          addFeaturesToSourceById(id, features)
        )
      };

      addSource(source);
      addLayer({ id: id });
      addSourceToLayerById(id, source);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  MapComponent
);
