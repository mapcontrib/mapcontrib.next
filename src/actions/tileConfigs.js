export const setTileConfig = (configId, index) => ({
  type: 'SET_TILE_CONFIG',
  configId,
  index
});

export const removeTileConfig = configId => ({
  type: 'REMOVE_TILE_CONFIG',
  configId
});
