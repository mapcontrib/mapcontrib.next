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

      let sources = new Set(state[action.features]);

      action.features.forEach(feature => sources.add(feature));

      return {
        ...state,
        [action.id]: Array.from(sources)
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
