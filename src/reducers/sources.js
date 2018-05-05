import {
  ADD_SOURCE,
  ADD_FEATURES_TO_SOURCE,
  REMOVE_SOURCE
} from 'actions/sources';

export const initialState = {};

export default function sources(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ADD_SOURCE:
      const newState = {
        ...state,
        [action.source.id]: action.source
      };

      return newState;

    case ADD_FEATURES_TO_SOURCE:
      if (!state[action.id]) {
        throw new SourceException(`Source not found (ID: ${action.id})`);
      }

      const source = { ...state[action.id] };
      let features = new Set(source.features);

      action.features.forEach(feature => features.add(feature));
      source.features = Array.from(features);

      return {
        ...state,
        [action.id]: source
      };

    case REMOVE_SOURCE:
      delete state[action.id];
      return { ...state };

    default:
      return state;
  }
}

export function SourceException(message) {
  this.message = message;
  this.name = 'SourceException';
}
