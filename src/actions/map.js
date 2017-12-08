export const increaseMapZoom = () => ({
  type: 'INCREASE_MAP_ZOOM'
});

export const decreaseMapZoom = () => ({
  type: 'DECREASE_MAP_ZOOM'
});

export const setMapZoom = zoom => ({
  type: 'SET_MAP_ZOOM',
  zoom
});

export const setMapMinZoom = minZoom => ({
  type: 'SET_MAP_MIN_ZOOM',
  minZoom
});

export const setMapMaxZoom = maxZoom => ({
  type: 'SET_MAP_MAX_ZOOM',
  maxZoom
});

export const setMapTileConfigId = configId => ({
  type: 'SET_MAP_TILE_CONFIG_ID',
  configId
});
