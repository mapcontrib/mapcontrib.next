export const ADD_SOURCE = 'ADD_SOURCE';
export const ADD_FEATURES_TO_SOURCE = 'ADD_FEATURES_TO_SOURCE';
export const REMOVE_SOURCE = 'REMOVE_SOURCE';

export const addSource = source => ({
  type: ADD_SOURCE,
  source
});

export const addFeaturesToSource = (source, features) =>
  addFeaturesToSourceById(source.id, features);

export const addFeaturesToSourceById = (id, features) => ({
  type: ADD_FEATURES_TO_SOURCE,
  id,
  features
});

export const removeSource = source => removeSourceById(source.id);

export const removeSourceById = id => ({
  type: REMOVE_SOURCE,
  id
});
