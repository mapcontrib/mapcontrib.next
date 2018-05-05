import { connect } from 'react-redux';
import { sourceTypes } from 'const/layers';
import { nectarivore } from 'helpers/requests';
import { fetchOsmoseCategories } from 'actions/async';
import {
  addLayer,
  removeLayerById,
  addSourceToLayerById
} from 'actions/layers';
import { addFeaturesToSourceById } from 'actions/layerSourceFeatures';
import OsmoseLayerSidebar from 'components/edition/OsmoseLayerSidebar';

const mapStateToProps = ({ layers, osmose }) => ({
  layers,
  categories: osmose.categories
});

const mapDispatchToProps = {
  fetchOsmoseCategories,
  addLayer,
  removeLayerById,
  addSourceToLayerById,
  addFeaturesToSourceById
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    addLayer,
    addSourceToLayerById,
    addFeaturesToSourceById
  } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    fetchOsmoseCategories: dispatchProps.fetchOsmoseCategories,
    removeLayerById: dispatchProps.removeLayerById,
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
  OsmoseLayerSidebar
);
