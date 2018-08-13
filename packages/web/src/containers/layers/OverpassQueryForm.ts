import { connect } from 'react-redux';
import shortid from 'shortid';

import { addSourceToLayer, removeSourceFromLayer } from 'actions/layers';
import { addSource, removeSource } from 'actions/sources';
import OverpassQueryForm from 'components/layers/OverpassQueryForm';
import { IState as ISourcesState } from 'reducers/sources';
import { ILayer, SourceTypes } from 'types';

interface IState {
  sources: ISourcesState;
}

interface IStateProps {
  sources: ISourcesState;
}

interface IDispatchProps {
  addSource: typeof addSource;
  addSourceToLayer: typeof addSourceToLayer;
  removeSource: typeof removeSource;
  removeSourceFromLayer: typeof removeSourceFromLayer;
}

interface IOwnProps {
  layer: ILayer;
}

const mapStateToProps = ({ sources }: IState): IStateProps => ({
  sources,
});

const mapDispatchToProps = {
  addSource,
  addSourceToLayer,
  removeSource,
  removeSourceFromLayer,
};

const mergeProps = (
  stateProps: IStateProps,
  dispatchProps: IDispatchProps,
  { layer }: IOwnProps
) => {
  const sources = stateProps.sources;
  const hasSource = layer.sources.length > 0;

  const query = hasSource ? sources[layer.sources[0]].origin : '';

  return {
    query,
    updateQuery: (originQuery: string) => {
      if (hasSource && query === '') {
        dispatchProps.removeSourceFromLayer(layer, sources[0]);
        dispatchProps.removeSource(sources[0]);
      } else {
        const source = {
          features: [],
          id: shortid.generate(),
          origin: originQuery,
          type: SourceTypes.OVERPASS,
        };

        dispatchProps.addSource(source);
        dispatchProps.addSourceToLayer(layer, source);
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OverpassQueryForm);
