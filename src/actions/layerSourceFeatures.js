export const ADD_FEATURES_TO_SOURCE = 'ADD_FEATURES_TO_SOURCE';

export const addFeaturesToSource = (source, features) =>
  addFeaturesToSourceById(source.get('id'), features);

export const addFeaturesToSourceById = (sourceId, features) => ({
  type: ADD_FEATURES_TO_SOURCE,
  sourceId,
  features
});
