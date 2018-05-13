import { ADD_LAYER, ADD_SOURCE_TO_LAYER, REMOVE_LAYER } from 'actions/layers';

export const initialState = {};

export default function layers(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ADD_LAYER:
      const newState = {
        ...state,
        [action.layer.id]: action.layer
      };

      return newState;

    case ADD_SOURCE_TO_LAYER:
      if (!state[action.layerId]) {
        throw new LayerNotFoundException(
          `Layer not found (ID: ${action.layerId})`
        );
      }

      const layer = { ...state[action.layerId] };

      layer.sources = {
        ...layer.sources,
        [action.source.id]: action.source
      };

      return {
        ...state,
        [action.layerId]: layer
      };

    case REMOVE_LAYER:
      delete state[action.layerId];
      return { ...state };

    default:
      return state;
  }
}

export function LayerNotFoundException(message) {
  this.message = message;
  this.name = 'LayerNotFoundException';
}
