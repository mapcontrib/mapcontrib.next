import { connect } from 'react-redux';
import { sourceTypes } from 'const/layers';
import { fetchOsmoseCategories } from 'actions/async';
import { addSourceToLayer, removeSourceFromLayer } from 'actions/layers';
import { addSource, removeSourceById } from 'actions/sources';

import OsmoseEditionForm from 'components/edition/OsmoseEditionForm';

const mapStateToProps = ({ layers, sources, osmose }, { layer }) => ({
  layer,
  layers: Object.values(layers),
  sources,
  categories: osmose.categories
});

const mapDispatchToProps = {
  fetchOsmoseCategories,
  addSource,
  removeSourceById,
  addSourceToLayer,
  removeSourceFromLayer
};

const mergeProps = (stateProps, dispatchProps) => {
  const {
    addSource,
    addSourceToLayer,
    removeSourceFromLayer,
    removeSourceById
  } = dispatchProps;
  const { layer, layers, sources, categories } = stateProps;

  return {
    layer,
    categories,
    fetchOsmoseCategories: dispatchProps.fetchOsmoseCategories,
    handleSources: items => {
      // remove deprecated sources

      console.log('Layer sources', layer.sources);
      console.log('items', items);
      console.log('layers', layers);

      layer.sources.forEach(id => {
        if (!items.includes(id)) {
          removeSourceFromLayer(layer, sources[id]);

          const shouldRemoveSource = layers
            .filter(l => l.id !== layer.id)
            .reduce((acc, layer) => acc && !layer.sources.includes(id), true);

          console.log('SHOULD REMOVE', shouldRemoveSource);

          if (shouldRemoveSource) removeSourceById(id);
        }
      });

      // add new items as sources
      items.forEach(item => {
        if (!layer.sources.includes(item)) {
          const source = {
            id: item,
            type: sourceTypes.OSMOSE,
            origin: item
          };

          if (!(item in sources)) addSource(source);

          addSourceToLayer(layer, source);
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  OsmoseEditionForm
);
