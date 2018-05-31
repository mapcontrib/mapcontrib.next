import { connect } from 'react-redux';
import shortid from 'shortid';
import { sourceTypes } from 'const/layers';
import { addSourceToLayer, removeSourceFromLayer } from 'actions/layers';
import { addSource, removeSource } from 'actions/sources';

import OverpassQueryForm from 'components/layers/OverpassQueryForm';

const mapStateToProps = ({ sources }) => ({
  sources
});

const mapDispatchToProps = {
  addSource,
  removeSource,
  addSourceToLayer,
  removeSourceFromLayer
};

const mergeProps = (stateProps, dispatchProps, { layer }) => {
  const {
    addSource,
    addSourceToLayer,
    removeSource,
    removeSourceFromLayer
  } = dispatchProps;

  const sources = stateProps.sources;
  const hasSource = layer.sources.length > 0;

  const query = hasSource ? sources[layer.sources[0]].origin : '';

  return {
    query,
    updateQuery: query => {
      if (hasSource && query === '') {
        removeSourceFromLayer(layer, sources[0]);
        removeSource(sources[0]);
      } else {
        const source = {
          id: shortid.generate(),
          origin: query,
          type: sourceTypes.OVERPASS
        };

        addSource(source);
        addSourceToLayer(layer, source);
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OverpassQueryForm);
