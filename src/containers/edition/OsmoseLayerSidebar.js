import { connect } from 'react-redux';
import { sourceTypes } from 'const/layers';
import { nectarivore } from 'helpers/requests';
import { fetchOsmoseCategories } from 'actions/async';
import {
  addLayer,
  removeLayerById,
  addSourceToLayerById
} from 'actions/layers';
import { addSource, addFeaturesToSourceById } from 'actions/sources';
import OsmoseLayerSidebar from 'components/edition/OsmoseLayerSidebar';

const mapStateToProps = ({ layers, osmose }) => ({
  layers,
  categories: osmose.categories
});

const mapDispatchToProps = {
  fetchOsmoseCategories,
  addLayer,
  addSource,
  removeLayerById,
  addSourceToLayerById,
  addFeaturesToSourceById
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    addLayer,
    addSource,
    addSourceToLayerById,
    addFeaturesToSourceById
  } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    fetchOsmoseCategories: dispatchProps.fetchOsmoseCategories,
    removeLayerById: dispatchProps.removeLayerById,
    addOsmoseLayer: id => {
      const source = {
        id: id,
        type: sourceTypes.OSMOSE,
        leafletLayer: nectarivore.createOsmose(id, features =>
          addFeaturesToSourceById(id, features)
        )
      };

      addSource(source);
      addLayer({ id: id, name: `osmose-layer-${id}` });
      addSourceToLayerById(id, source);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  OsmoseLayerSidebar
);
