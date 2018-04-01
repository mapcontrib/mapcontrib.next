import { connect } from 'react-redux';
import { fetchOsmoseCategories } from '../actions/async';
import { addLayer, removeLayer, addPointsToLayer } from '../actions/layers';
import OsmoseLayerSidebar from '../components/OsmoseLayerSidebar';

const mapStateToProps = ({ layers, osmose }) => ({
  layers,
  categories: osmose.categories
});

const mapDispatchToProps = {
  fetchOsmoseCategories,
  addLayer,
  removeLayer,
  addPointsToLayer
};

export default connect(mapStateToProps, mapDispatchToProps)(OsmoseLayerSidebar);
