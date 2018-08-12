import { Action, Actions } from 'actions/layers';
import LayerException from 'exceptions/layer';
import { ILayer } from 'types';

export interface IState {
  [key: string]: ILayer;
}

const blackList = ['id', 'type', 'sources'];

export default function layers(state: IState = {}, action: Action) {
  switch (action.type) {
    case Actions.ADD_LAYER:
      action.layer.isVisible = true;
      action.layer.sources = [];

      const newState = {
        ...state,
        [action.layer.id]: action.layer,
      };

      return newState;

    case Actions.ADD_SOURCE_TO_LAYER:
      if (!state[action.id]) {
        throw new LayerException(`Layer not found (ID: ${action.id})`);
      }

      const layer = { ...state[action.id] };
      const source = action.source;

      if (layer.type && layer.type !== source.type) {
        throw new LayerException(
          `Source type ${source.type} does not match layer type: ${layer.type})`
        );
      }

      if (!layer.type) {
        layer.type = source.type;
      }

      let newSources;

      if (layer.sources) {
        newSources = [...layer.sources];
        newSources.push(source.id);
      } else {
        newSources = [source.id];
      }

      layer.sources = newSources;

      return {
        ...state,
        [action.id]: layer,
      };

    case Actions.REMOVE_SOURCE_FROM_LAYER:
      if (!state[action.id]) {
        throw new LayerException(`Layer not found (ID: ${action.id})`);
      }

      const layerToRemoveFrom = { ...state[action.id] };
      const sourceToRemove = action.source;

      const sources = new Set(layerToRemoveFrom.sources);
      sources.delete(sourceToRemove.id);

      layerToRemoveFrom.sources = Array.from(sources);

      return {
        ...state,
        [action.id]: layerToRemoveFrom,
      };

    case Actions.EDIT_LAYER:
      const keys = Object.keys(action.data);

      blackList.forEach(item => {
        if (keys.includes(item)) {
          throw new LayerException(
            `Attempt to modifify blacklisted layer key (key: ${item})`
          );
        }
      });

      const editedLayer = {
        ...state[action.id],
        ...action.data,
      };

      return {
        ...state,
        [action.id]: editedLayer,
      };

    case Actions.REMOVE_LAYER:
      delete state[action.id];
      return { ...state };

    default:
      return state;
  }
}
