import {
  initialState,
  default as reducer,
  LayerException
} from 'reducers/layers';
import {
  addLayer,
  addSourceToLayerById,
  removeLayerById,
  editLayerById
} from 'actions/layers';
import { sourceTypes } from 'const/layers';

const defaultLayerAttributes = {
  id: 'id',
  name: 'name',
  description: 'description',
  isVisible: true,
  representationType: 'marker',
  sources: []
};

const overpassLayer = {
  ...defaultLayerAttributes,
  id: 'UUID_OVERPASS'
};

const osmoseLayer = {
  ...defaultLayerAttributes,
  id: 'UUID_OSMOSE'
};

const overpassSource = {
  id: 'UUID_OVERPASS_SOURCE',
  type: sourceTypes.OVERPASS,
  origin: 'origin',
  features: []
};

const osmoseSource = {
  id: 'UUID_OSMOSE_SOURCE',
  type: sourceTypes.OSMOSE,
  origin: 'origin',
  features: []
};

describe('Layers reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer()).toBe(initialState);
  });

  it('Should be able to add a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));

    expect(state).toMatchSnapshot();

    const state2 = reducer(state, addLayer(osmoseLayer));

    expect(state2).toMatchSnapshot();
    expect(Object.keys(state2).length).toBe(2);
    expect(state2).not.toBe(state);
  });

  it('Should be able to remove a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const state2 = reducer(state, addLayer(osmoseLayer));

    const state3 = reducer(state2, removeLayerById(overpassLayer.id));

    expect(Object.keys(state3).length).toBe(1);
    expect(state3).toMatchSnapshot();
    expect(state3).not.toBe(state2);
  });

  it('Should be able to add a source to a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const state2 = reducer(
      state,
      addSourceToLayerById(overpassLayer.id, overpassSource)
    );

    expect(state2).toMatchSnapshot();
    expect(state2[overpassLayer.id].type).toBe(overpassSource.type);
    expect(state2).not.toBe(state);
  });

  it('Should be able to edit a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));

    const newData = {
      name: 'newName',
      description: 'newDescription',
      isVisible: 'newIsVisible',
      representationType: 'newRepresentationType'
    };

    const state2 = reducer(state, editLayerById(overpassLayer.id, newData));

    const editedLayer = state2[overpassLayer.id];

    expect(state2).toMatchSnapshot();
    Object.keys(newData).forEach(key =>
      expect(editedLayer[key]).toBe(newData[key])
    );
    expect(state2).not.toBe(state);
  });

  it('Should throw an exception when adding a source to an unknown layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const addSource = () =>
      reducer(state, addSourceToLayerById('Unknown_ID', overpassSource));

    expect(addSource).toThrow(LayerException);
  });

  it('Should throw an exception when adding a source to a layer of different type', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const state2 = reducer(
      state,
      addSourceToLayerById(overpassLayer.id, overpassSource)
    );

    const addSource = () => {
      reducer(state2, addSourceToLayerById(overpassLayer.id, osmoseSource));
    };

    expect(addSource).toThrow(LayerException);
  });

  it('Should throw an exception when editing a blacklisted item in a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const editLayer = () =>
      reducer(state, editLayerById(overpassLayer.id, { id: 2 }));

    expect(editLayer).toThrow(LayerException);
  });
});
