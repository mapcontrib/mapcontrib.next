import { connect } from 'react-redux';
import { removeLayer } from 'actions/layers';
import { removeSourceById } from 'actions/sources';

import LayerEditionSidebar from 'components/layers/LayerEditionSidebar';

const mapStateToProps = ({ layers }, { match }) => {
  return {
    layer: match && layers[match.params.id],
    layers: Object.values(layers)
  };
};

const mapDispatchToProps = {
  removeLayer,
  removeSourceById
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { removeLayer, removeSourceById } = dispatchProps;

  const { layer, layers } = stateProps;

  return {
    ...ownProps,
    layer,
    removeLayer: () => {
      layer.sources.forEach(id => {
        const shouldRemoveSource = layers
          .filter(l => l.id !== layer.id)
          .reduce((acc, layer) => acc && !layer.sources.includes(id), true);

        if (shouldRemoveSource) removeSourceById(id);
      });

      removeLayer(layer);

      ownProps.history.goBack();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LayerEditionSidebar);
