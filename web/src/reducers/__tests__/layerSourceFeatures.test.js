import { initialState, default as reducer } from 'reducers/layerSourceFeatures';
import { addFeaturesToSourceById } from 'actions/layerSourceFeatures';

describe('Layer source features reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer()).toBe(initialState);
  });

  it('Should be able to add a feature to a layer source', () => {
    const state = reducer(
      initialState,
      addFeaturesToSourceById('UUID', [{ id: 123, type: 'node' }])
    );

    expect(state).toMatchSnapshot();

    const state2 = reducer(
      state,
      addFeaturesToSourceById('UUID_2', [{ id: 456, type: 'way' }])
    );
    const state3 = reducer(
      state2,
      addFeaturesToSourceById('UUID_2', [{ id: 789, type: 'relation' }])
    );

    expect(state3).toMatchSnapshot();
    expect(state3).not.toBe(state2);
  });
});
