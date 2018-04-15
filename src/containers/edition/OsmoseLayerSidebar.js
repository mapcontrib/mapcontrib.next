import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(OsmoseLayerSidebar);
