import { Map } from 'immutable';

const initialState = new Map();

const layers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LAYER':
      return state.set(
        action.id,
        new Map({
          id: action.id,
          type: action.layerType,
          leafletLayer: action.leafletLayer,
          points: action.points || []
        })
      );

    case 'LAYER_ADD_POINTS':
      return state.setIn([action.id, 'points'], action.points);

    case 'REMOVE_LAYER':
      return state.delete(action.id);

    default:
      return state;
  }
};

export default layers;
