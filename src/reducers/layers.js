import {
  ADD_LAYER,
  ADD_SOURCE_TO_LAYER,
  EDIT_LAYER,
  REMOVE_LAYER
} from 'actions/layers';

export const initialState = {};

const blackList = ['id', 'type', 'sources'];

export default function layers(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ADD_LAYER:
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

      layer.sources = layers.sources
        ? layers.sources.push(source.id)
        : [source.id];

      return {
        ...state,
        [action.id]: layer
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
