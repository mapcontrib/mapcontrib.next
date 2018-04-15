import { ADD_FEATURES_TO_SOURCE } from 'actions/layerSourceFeatures';

export const initialState = {};

export default function layerSourceFeatures(
  state = initialState,
  action = { type: null }
) {
  switch (action.type) {
    case ADD_FEATURES_TO_SOURCE:
      if (!state[action.sourceId]) {
        state[action.sourceId] = [];
      }

      state[action.sourceId].push(...action.features);

      return {
        ...state,
        [action.sourceId]: [...state[action.sourceId]]
      };

    default:
      return state;
  }
}
