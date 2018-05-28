import { connect } from 'react-redux';
import { sourceTypes } from 'const/layers';
import { fetchOsmoseCategories } from 'actions/async';
import { addSourceToLayer, removeSourceFromLayer } from 'actions/layers';
import { addSource, removeSourceById } from 'actions/sources';

import OsmoseItemsForm from 'components/layers/OsmoseItemsForm';

const mapStateToProps = ({ layers, sources, osmose }) => ({
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

const mergeProps = (stateProps, dispatchProps, { layer }) => {
  const {
    addSource,
    addSourceToLayer,
    removeSourceFromLayer,
    removeSourceById
  } = dispatchProps;
  const { layers, sources, categories } = stateProps;

  return {
    items: layer.sources,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OsmoseItemsForm);
