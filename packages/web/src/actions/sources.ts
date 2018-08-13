import { ILayerFeature, ILayerSource } from 'types';

export enum Actions {
  ADD_SOURCE = 'ADD_SOURCE',
  ADD_FEATURES_TO_SOURCE = 'ADD_FEATURES_TO_SOURCE',
  REMOVE_SOURCE = 'REMOVE_SOURCE',
}

export type Action =
  | {
      type: Actions.ADD_SOURCE;
      source: ILayerSource;
    }
  | {
      type: Actions.ADD_FEATURES_TO_SOURCE;
      id: string;
      features: ILayerFeature[];
    }
  | {
      type: Actions.REMOVE_SOURCE;
      id: string;
    };

export const addSource = (source: ILayerSource): Action => ({
  source,
  type: Actions.ADD_SOURCE,
});

export const addFeaturesToSource = (
  source: ILayerSource,
  features: ILayerFeature[]
): Action => addFeaturesToSourceById(source.id, features);

export const addFeaturesToSourceById = (
  id: string,
  features: ILayerFeature[]
): Action => ({
  features,
  id,
  type: Actions.ADD_FEATURES_TO_SOURCE,
});

export const removeSource = (source: ILayerSource): Action =>
  removeSourceById(source.id);

export const removeSourceById = (id: string): Action => ({
  id,
  type: Actions.REMOVE_SOURCE,
});
