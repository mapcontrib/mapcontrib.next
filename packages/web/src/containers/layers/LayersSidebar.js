import { connect } from 'react-redux';
import { addLayer } from 'actions/layers';

import LayersSidebar from 'components/layers/LayersSidebar';

const mapStateToProps = ({ layers }) => ({
  layers: Object.values(layers)
});

const mapDispatchToProps = {
  addLayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayersSidebar);
