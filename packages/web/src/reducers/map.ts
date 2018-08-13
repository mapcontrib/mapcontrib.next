import { Action, Actions } from 'actions/map';

export interface IState {
  maxZoom: number;
  minZoom: number;
  tileConfigId: string;
  zoom: number;
}

export const initialState = {
  maxZoom: 18,
  minZoom: 0,
  tileConfigId: 'osm',
  zoom: 15,
};

export default function map(state: IState = initialState, action: Action) {
  switch (action.type) {
    case Actions.INCREASE_MAP_ZOOM:
      return {
        ...state,
        zoom: state.zoom === state.maxZoom ? state.zoom : state.zoom + 1,
      };
    case Actions.DECREASE_MAP_ZOOM:
      return {
        ...state,
        zoom: state.zoom === state.minZoom ? state.zoom : state.zoom - 1,
      };
    case Actions.SET_MAP_ZOOM:
      return {
        ...state,
        zoom: action.zoom,
      };
    case Actions.SET_MAP_MIN_ZOOM:
      return {
        ...state,
        minZoom: action.minZoom,
      };
    case Actions.SET_MAP_MAX_ZOOM:
      return {
        ...state,
        maxZoom: action.maxZoom,
      };
    case Actions.SET_MAP_TILE_CONFIG_ID:
      return {
        ...state,
        tileConfigId: action.configId,
      };
    default:
      return state;
  }
}
