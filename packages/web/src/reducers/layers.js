import {
  ADD_LAYER,
  ADD_SOURCE_TO_LAYER,
  REMOVE_SOURCE_FROM_LAYER,
  EDIT_LAYER,
  REMOVE_LAYER
} from 'actions/layers';

export const initialState = {};

const blackList = ['id', 'type', 'sources'];

export default function layers(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ADD_LAYER:
      action.layer.isVisible = true;
      action.layer.sources = [];

      const newState = {
        ...state,
        [action.layer.id]: action.layer
      };

      return newState;

    case ADD_SOURCE_TO_LAYER:
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

      if (!layer.type) layer.type = source.type;

      let newSources;

      if (layer.sources) {
        newSources = [...layer.sources];
        newSources.push(source.id);
      } else newSources = [source.id];

      layer.sources = newSources;

      return {
        ...state,
        [action.id]: layer
      };

    case REMOVE_SOURCE_FROM_LAYER:
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
        [action.id]: layerToRemoveFrom
      };

    case EDIT_LAYER:
      const keys = Object.keys(action.data);

      blackList.forEach(item => {
        if (keys.includes(item))
          throw new LayerException(
            `Attempt to modifify blacklisted layer key (key: ${item})`
          );
      });

      const editedLayer = {
        ...state[action.id],
        ...action.data
      };

      return {
        ...state,
        [action.id]: editedLayer
      };

    case REMOVE_LAYER:
      delete state[action.id];
      return { ...state };

    default:
      return state;
  }
}

export function LayerException(message) {
  this.message = message;
  this.name = 'LayerException';
}
