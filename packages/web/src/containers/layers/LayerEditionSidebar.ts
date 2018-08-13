import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { removeLayer } from 'actions/layers';
import { removeSourceById } from 'actions/sources';
import LayerEditionSidebar from 'components/layers/LayerEditionSidebar';
import { IState as ILayersState } from 'reducers/layers';
import { ILayer } from 'types';

interface IState {
  layers: ILayersState;
}

interface IStateProps {
  layer: ILayer;
  layers: ILayer[];
}

interface IProps extends RouteComponentProps<any> {}

interface IDispatchProps {
  removeLayer: typeof removeLayer;
  removeSourceById: typeof removeSourceById;
}

interface IOwnProps extends RouteComponentProps<any> {}

const mapStateToProps = (
  { layers }: IState,
  { match }: IProps
): IStateProps => {
  return {
    layer: match && layers[match.params.id],
    layers: Object.values(layers),
  };
};

const mapDispatchToProps = {
  removeLayer,
  removeSourceById,
};

const mergeProps = (
  stateProps: IStateProps,
  dispatchProps: IDispatchProps,
  ownProps: IOwnProps
) => {
  const { layer, layers } = stateProps;

  return {
    ...ownProps,
    layer,
    removeLayer: () => {
      layer.sources.forEach(id => {
        const shouldRemoveSource = layers
          .filter(l => l.id !== layer.id)
          .reduce((acc, l) => acc && !l.sources.includes(id), true);

        if (shouldRemoveSource) {
          dispatchProps.removeSourceById(id);
        }
      });

      dispatchProps.removeLayer(layer);

      ownProps.history.goBack();
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LayerEditionSidebar);
