export const INCREASE_MAP_ZOOM = 'INCREASE_MAP_ZOOM';
export const DECREASE_MAP_ZOOM = 'DECREASE_MAP_ZOOM';
export const SET_MAP_ZOOM = 'SET_MAP_ZOOM';
export const SET_MAP_MIN_ZOOM = 'SET_MAP_MIN_ZOOM';
export const SET_MAP_MAX_ZOOM = 'SET_MAP_MAX_ZOOM';
export const SET_MAP_TILE_CONFIG_ID = 'SET_MAP_TILE_CONFIG_ID';

export const increaseMapZoom = () => ({
  type: INCREASE_MAP_ZOOM
});

export const decreaseMapZoom = () => ({
  type: DECREASE_MAP_ZOOM
});

export const setMapZoom = zoom => ({
  type: SET_MAP_ZOOM,
  zoom
});

export const setMapMinZoom = minZoom => ({
  type: SET_MAP_MIN_ZOOM,
  minZoom
});

export const setMapMaxZoom = maxZoom => ({
  type: SET_MAP_MAX_ZOOM,
  maxZoom
});

export const setMapTileConfigId = configId => ({
  type: SET_MAP_TILE_CONFIG_ID,
  configId
});
