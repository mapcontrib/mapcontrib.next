import { Action, Actions } from 'actions/sources';
import SourceException from 'exceptions/source';
import { ILayerFeature, ILayerSource } from 'types';

export interface IState {
  [key: string]: ILayerSource;
}

export default function sources(state: IState, action: Action) {
  switch (action.type) {
    case Actions.ADD_SOURCE:
      const newState = {
        ...state,
        [action.source.id]: action.source,
      };

      return newState;

    case Actions.ADD_FEATURES_TO_SOURCE:
      if (!state[action.id]) {
        throw new SourceException(`Source not found (ID: ${action.id})`);
      }

      const source = { ...state[action.id] };
      const features = new Set(source.features);

      action.features.forEach((feature: ILayerFeature) =>
        features.add(feature)
      );
      source.features = Array.from(features);

      return {
        ...state,
        [action.id]: source,
      };

    case Actions.REMOVE_SOURCE:
      delete state[action.id];
      return { ...state };

    default:
      return state;
  }
}
