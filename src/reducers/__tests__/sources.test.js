import {
  initialState,
  default as reducer,
  SourceException
} from 'reducers/sources';

import {
  addSource,
  addFeaturesToSourceById,
  removeSourceById
} from 'actions/sources';

const defaultSourceAttributes = {
  id: 'id',
  name: 'name',
  origin: 'origin',
  features: []
};

const overpassSource = {
  ...defaultSourceAttributes,
  id: 'UUID_OVERPASS'
};

const osmoseSource = {
  ...defaultSourceAttributes,
  id: 'UUID_OSMOSE'
};

describe('Sources reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer()).toBe(initialState);
  });

  it('Should be able to add a source', () => {
    const state = reducer(initialState, addSource(overpassSource));

    expect(state).toMatchSnapshot();

    const state2 = reducer(state, addSource(osmoseSource));

    expect(state2).toMatchSnapshot();
    expect(Object.keys(state2).length).toBe(2);
    expect(state2).not.toBe(state);
  });

  it('Should be able to remove a source', () => {
    const state = reducer(initialState, addSource(overpassSource));
    const state2 = reducer(state, addSource(osmoseSource));

    const state3 = reducer(state2, removeSourceById(overpassSource.id));

    expect(Object.keys(state3).length).toBe(1);
    expect(state3).toMatchSnapshot();
    expect(state3).not.toBe(state2);
  });

  it('Should be able to add a feature to a source', () => {
    const state = reducer(initialState, addSource(overpassSource));

    const state2 = reducer(
      state,
      addFeaturesToSourceById('UUID_OVERPASS', [{ id: 123, type: 'node' }])
    );

    expect(state2).toMatchSnapshot();
    expect(state2.UUID_OVERPASS.features).toHaveLength(1);
    expect(state2).not.toBe(state);
  });

  it('Should throw an exception when adding features to an unknown source', () => {
    const state = reducer(initialState, addSource(overpassSource));
    const addFeatures = () =>
      reducer(state, addFeaturesToSourceById('Unknown_ID', [{}]));

    expect(addFeatures).toThrow(SourceException);
  });
});
