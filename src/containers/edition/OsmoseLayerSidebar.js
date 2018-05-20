import { connect } from 'react-redux';
import { sourceTypes } from 'const/layers';
import { fetchOsmoseCategories } from 'actions/async';
import {
  addLayer,
  removeLayerById,
  addSourceToLayerById
} from 'actions/layers';
import { addSource } from 'actions/sources';
import OsmoseLayerSidebar from 'components/edition/OsmoseLayerSidebar';

const mapStateToProps = ({ layers, osmose }, ownProps) => ({
  ownProps,
  layers: Object.values(layers).filter(
    layer => layer.type === sourceTypes.OSMOSE
  ),
  categories: osmose.categories
});

const mapDispatchToProps = {
  fetchOsmoseCategories,
  addLayer,
  addSource,
  removeLayerById,
  addSourceToLayerById
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { addLayer, addSource, addSourceToLayerById } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    fetchOsmoseCategories: dispatchProps.fetchOsmoseCategories,
    removeLayerById: dispatchProps.removeLayerById,
    addOsmoseLayer: id => {
      const source = {
        id: id,
        type: sourceTypes.OSMOSE,
        origin: id
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
