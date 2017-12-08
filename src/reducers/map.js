const defaultState = {
  zoom: 15,
  minZoom: 0,
  maxZoom: 18,
  tileConfigId: 'osm'
};

const map = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE_MAP_ZOOM':
      return {
        ...state,
        zoom: state.zoom === state.maxZoom ? state.zoom : state.zoom + 1
      };
    case 'DECREASE_MAP_ZOOM':
      return {
        ...state,
        zoom: state.zoom === state.minZoom ? state.zoom : state.zoom - 1
      };
    case 'SET_MAP_ZOOM':
      return {
        ...state,
        zoom: action.zoom
      };
    case 'SET_MAP_MIN_ZOOM':
      return {
        ...state,
        minZoom: action.minZoom
      };
    case 'SET_MAP_MAX_ZOOM':
      return {
        ...state,
        maxZoom: action.maxZoom
      };
    case 'SET_MAP_TILE_CONFIG_ID':
      return {
        ...state,
        tileConfigId: action.configId
      };
    default:
      return state;
  }
};

export default map;
