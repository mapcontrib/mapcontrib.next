import { connect } from 'react-redux';
import shortid from 'shortid';
import { sourceTypes } from 'const/layers';
import { addLayer, addSourceToLayerById } from 'actions/layers';
import { addSource } from 'actions/sources';
import OverpassLayerSidebar from 'components/edition/OverpassLayerSidebar';

const mapDispatchToProps = {
  addLayer,
  addSource,
  addSourceToLayerById
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { addLayer, addSource, addSourceToLayerById } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    addOverpassLayer: (name, query) => {
      const source = {
        id: shortid.generate(),
        origin: query,
        type: sourceTypes.OVERPASS
      };

      const layerId = shortid.generate();

      addSource(source);
      addLayer({ id: layerId, name });
      addSourceToLayerById(layerId, source);
    }
  };
};

export default connect(null, mapDispatchToProps, mergeProps)(
  OverpassLayerSidebar
);
