import { SET_TILE_CONFIG, REMOVE_TILE_CONFIG } from 'actions/tileConfigs';

const initialState = ['osm'];

export default function tileConfigs(
  state = initialState,
  action = { type: null }
) {
  switch (action.type) {
    case SET_TILE_CONFIG:
      const oldState = state.filter(configId => configId !== action.configId);
      const index = action.index || state.length;

      return [
        ...oldState.slice(0, index),
        action.configId,
        ...oldState.slice(index, oldState.length)
      ];

    case REMOVE_TILE_CONFIG:
      return state.filter(configId => configId !== action.configId);

    default:
      return state;
  }
}
