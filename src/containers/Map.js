import { connect } from 'react-redux';
import MapComponent from 'components/Map';
import { sourceTypes } from 'const/layers';
import { nectarivore } from 'helpers/requests';
import { setMapZoom } from 'actions/map';
import { addLayer, addSourceToLayerById } from 'actions/layers';
import { addFeaturesToSourceById } from 'actions/layerSourceFeatures';
import { findTileSourcesFromConfigId } from 'helpers/map';

const mapStateToProps = (state, { match, history }) => ({
  zoom: state.map.zoom,
  minZoom: state.map.minZoom,
  maxZoom: state.map.maxZoom,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  layers: state.layers,
  layerSourceFeatures: state.layerSourceFeatures,
  submittedErrors: state.osmose.submitted,
  openOsmose: id => history.push(`${match.url}/edition/osmose/${id}`)
});

const mapDispatchToProps = {
  setMapZoom,
  addLayer,
  addSourceToLayerById,
  addFeaturesToSourceById
};

const mergeProps = (stateProps, dispatchProps) => {
  const {
    addLayer,
    addSourceToLayerById,
    addFeaturesToSourceById
  } = dispatchProps;

  return {
    ...stateProps,
    setMapZoom: dispatchProps.setMapZoom,
    addOsmoseLayer: id => {
      addLayer({ id: id });

      addSourceToLayerById(id, {
        id: id,
        type: sourceTypes.OSMOSE,
        leafletLayer: nectarivore.createOsmose(id, features =>
          addFeaturesToSourceById(id, features)
        )
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  MapComponent
);
