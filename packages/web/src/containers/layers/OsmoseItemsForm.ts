import { Category } from 'osmose-request';
import { connect } from 'react-redux';

import { fetchOsmoseCategories } from 'actions/async';
import { addSourceToLayer, removeSourceFromLayer } from 'actions/layers';
import { addSource, removeSourceById } from 'actions/sources';
import OsmoseItemsForm from 'components/layers/OsmoseItemsForm';
import { IState as ILayersState } from 'reducers/layers';
import { IState as IOsmoseState } from 'reducers/osmose';
import { IState as ISourcesState } from 'reducers/sources';
import { ILayer, ILayerSource, SourceTypes } from 'types';

interface IState {
  layers: ILayersState;
  osmose: IOsmoseState;
  sources: ISourcesState;
}

interface IStateProps {
  categories: Category[];
  layers: ILayer[];
  sources: ISourcesState;
}

interface IDispatchProps {
  addSource: typeof addSource;
  addSourceToLayer: typeof addSourceToLayer;
  fetchOsmoseCategories: typeof fetchOsmoseCategories;
  removeSourceById: typeof removeSourceById;
  removeSourceFromLayer: typeof removeSourceFromLayer;
}

interface IOwnProps {
  layer: ILayer;
}

const mapStateToProps = ({ layers, sources, osmose }: IState): IStateProps => ({
  categories: osmose.categories,
  layers: Object.values(layers),
  sources,
});

const mapDispatchToProps = {
  addSource,
  addSourceToLayer,
  fetchOsmoseCategories,
  removeSourceById,
  removeSourceFromLayer,
};

const mergeProps = (
  stateProps: IStateProps,
  dispatchProps: IDispatchProps,
  { layer }: IOwnProps
) => {
  const { layers, sources, categories } = stateProps;

  return {
    categories,
    fetchOsmoseCategories: dispatchProps.fetchOsmoseCategories,
    handleSources: (items: string[]) => {
      // remove deprecated sources

      // console.log('Layer sources', layer.sources);
      // console.log('items', items);
      // console.log('layers', layers);

      layer.sources.forEach(id => {
        if (!items.includes(id)) {
          dispatchProps.removeSourceFromLayer(layer, sources[id]);

          const shouldRemoveSource = layers
            .filter(l => l.id !== layer.id)
            .reduce((acc, l) => acc && !l.sources.includes(id), true);

          if (shouldRemoveSource) {
            dispatchProps.removeSourceById(id);
          }
        }
      });

      // add new items as sources
      items.forEach(item => {
        if (!layer.sources.includes(item)) {
          const source: ILayerSource = {
            features: [],
            id: item,
            origin: item,
            type: SourceTypes.OSMOSE,
          };

          if (!(item in sources)) {
            dispatchProps.addSource(source);
          }

          dispatchProps.addSourceToLayer(layer, source);
        }
      });
    },
    items: layer.sources,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OsmoseItemsForm);
