export const addLayer = layer => {
  const { type, ...rest } = layer;

  return {
    type: 'ADD_LAYER',
    layerType: type,
    ...rest
  };
};

export const addPointsToLayer = (id, points) => ({
  type: 'LAYER_ADD_POINTS',
  id,
  points
});

export const removeLayer = id => ({
  type: 'REMOVE_LAYER',
  id
});
