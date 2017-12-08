export const addLayer = (layer, index) => ({
  type: 'ADD_LAYER',
  layer,
  index
});

export const removeLayer = layer => ({
  type: 'REMOVE_LAYER',
  layer
});
