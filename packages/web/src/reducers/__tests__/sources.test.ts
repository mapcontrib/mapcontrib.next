import {
  addFeaturesToSourceById,
  addSource,
  removeSourceById,
} from 'actions/sources';
import SourceException from 'exceptions/source';
import { default as reducer } from 'reducers/sources';
import { FeatureTypes, SourceTypes } from 'types';

const initialState = {};

const defaultSourceAttributes = {
  features: [],
  id: 'id',
  name: 'name',
  origin: 'origin',
};

const overpassSource = {
  ...defaultSourceAttributes,
  id: 'UUID_OVERPASS',
  type: SourceTypes.OVERPASS,
};

const osmoseSource = {
  ...defaultSourceAttributes,
  id: 'UUID_OSMOSE',
  type: SourceTypes.OSMOSE,
};

describe('Sources reducer', () => {
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
      addFeaturesToSourceById('UUID_OVERPASS', [
        { id: 123, type: FeatureTypes.NODE },
      ])
    );

    expect(state2).toMatchSnapshot();
    expect(state2.UUID_OVERPASS.features).toHaveLength(1);
    expect(state2).not.toBe(state);
  });

  it('Should throw an exception when adding features to an unknown source', () => {
    const state = reducer(initialState, addSource(overpassSource));
    const addFeatures = () =>
      reducer(
        state,
        addFeaturesToSourceById('Unknown_ID', [
          { id: 456, type: FeatureTypes.WAY },
        ])
      );

    expect(addFeatures).toThrow(SourceException);
  });
});
