export const ADD_LAYER = 'ADD_LAYER';
export const ADD_SOURCE_TO_LAYER = 'ADD_SOURCE_TO_LAYER';
export const EDIT_LAYER = 'EDIT_LAYER';
export const REMOVE_LAYER = 'REMOVE_LAYER';

export const addLayer = layer => ({
  type: ADD_LAYER,
  layer
});

export const addSourceToLayer = (layer, source) =>
  addSourceToLayerById(layer.id, source);

export const addSourceToLayerById = (id, source) => ({
  type: ADD_SOURCE_TO_LAYER,
  id,
  source
});

export const editLayer = (layer, data) => editLayerById(layer.id, data);

export const editLayerById = (id, data) => ({
  type: EDIT_LAYER,
  id,
  data
});

export const removeLayer = layer => removeLayerById(layer.id);

export const removeLayerById = id => ({
  type: REMOVE_LAYER,
  id
});
