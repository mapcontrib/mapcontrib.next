import { Action, Actions } from 'actions/tileConfigs';

export const initialState = ['osm'];

export default function tileConfigs(state = initialState, action: Action) {
  switch (action.type) {
    case Actions.SET_TILE_CONFIG:
      const oldState = state.filter(configId => configId !== action.configId);
      const index = action.index || state.length;

      return [
        ...oldState.slice(0, index),
        action.configId,
        ...oldState.slice(index, oldState.length),
      ];

    case Actions.REMOVE_TILE_CONFIG:
      return state.filter(configId => configId !== action.configId);

    default:
      return state;
  }
}
