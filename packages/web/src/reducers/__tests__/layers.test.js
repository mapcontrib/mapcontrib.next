import {
  initialState,
  default as reducer,
  LayerNotFoundException
} from 'reducers/layers';
import {
  addLayer,
  addSourceToLayerById,
  removeLayerById
} from 'actions/layers';
import { OVERPASS_SOURCE } from 'const/layerSource';
import { CONTENT_DISPLAY_SIDEBAR } from 'const/contentDisplay';

const defaultLayerAttributes = {
  id: 'id',
  name: 'name',
  description: 'description',
  visible: true,
  leafletLayer: 'leafletLayer'
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
  id: 'id',
  type: OVERPASS_SOURCE,
  name: 'name',
  description: 'description',
  visible: true,
  contentDisplay: CONTENT_DISPLAY_SIDEBAR,
  content: 'content',
  leafletLayer: 'leafletLayer'
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
    expect(state2).not.toBe(state);
  });

  it('Should be able to remove a layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const state2 = reducer(state, addLayer(osmoseLayer));

    expect(Object.keys(state2).length).toBe(2);

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
    expect(state2).not.toBe(state);
  });

  it('Should throw an exception when adding a source to an unknown layer', () => {
    const state = reducer(initialState, addLayer(overpassLayer));
    const addSource = () =>
      reducer(state, addSourceToLayerById('Unknown_ID', overpassSource));

    expect(addSource).toThrow(LayerNotFoundException);
  });
});
