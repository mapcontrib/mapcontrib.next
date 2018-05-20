import { connect } from 'react-redux';
import { removeLayerById } from 'actions/layers';

import LayerEditionSidebar from 'components/edition/LayerEditionSidebar';

const mapStateToProps = ({ layers }, { match }) => {
  return {
    layer: match && layers[match.params.id]
  };
};

const mapDispatchToProps = {
  removeLayerById
};

export default connect(mapStateToProps, mapDispatchToProps)(
  LayerEditionSidebar
);
