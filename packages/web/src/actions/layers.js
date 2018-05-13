export const ADD_LAYER = 'ADD_LAYER';
export const ADD_SOURCE_TO_LAYER = 'ADD_SOURCE_TO_LAYER';
export const REMOVE_LAYER = 'REMOVE_LAYER';

export const addLayer = layer => ({
  type: ADD_LAYER,
  layer: {
    id: layer.id,
    name: layer.name,
    description: layer.description,
    visible: layer.visible,
    leafletLayer: layer.leafletLayer,
    sources: {}
  }
});

export const addSourceToLayer = (layer, source) =>
  addSourceToLayerById(layer.get('id'), source);

export const addSourceToLayerById = (layerId, source) => ({
  type: ADD_SOURCE_TO_LAYER,
  layerId,
  source: {
    id: source.id,
    type: source.type,
    name: source.name,
    description: source.description,
    visible: source.visible,
    contentDisplay: source.contentDisplay,
    content: source.content,
    leafletLayer: source.leafletLayer,
    points: source.points || []
  }
});

export const removeLayer = layer => removeLayerById(layer.get('id'));

export const removeLayerById = layerId => ({
  type: REMOVE_LAYER,
  layerId
});
