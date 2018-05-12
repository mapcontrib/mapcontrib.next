import { ADD_FEATURES_TO_SOURCE } from 'actions/layerSourceFeatures';

export const initialState = {};

export default function layerSourceFeatures(
  state = initialState,
  action = { type: null }
) {
  switch (action.type) {
    case ADD_FEATURES_TO_SOURCE:
      let sources = new Set(state[action.sourceId]);

      action.features.forEach(feature => sources.add(feature));

      return {
        ...state,
        [action.sourceId]: Array.from(sources)
      };

    default:
      return state;
  }
}
