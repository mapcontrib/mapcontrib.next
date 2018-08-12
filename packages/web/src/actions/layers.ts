import { ILayer, ILayerSource } from 'types';

export enum Actions {
  ADD_LAYER = 'ADD_LAYER',
  ADD_SOURCE_TO_LAYER = 'ADD_SOURCE_TO_LAYER',
  REMOVE_SOURCE_FROM_LAYER = 'REMOVE_SOURCE_FROM_LAYER',
  EDIT_LAYER = 'EDIT_LAYER',
  REMOVE_LAYER = 'REMOVE_LAYER',
}

export type Action =
  | {
      layer: ILayer;
      type: Actions.ADD_LAYER;
    }
  | {
      id: string;
      source: ILayerSource;
      type: Actions.ADD_SOURCE_TO_LAYER;
    }
  | {
      id: string;
      source: ILayerSource;
      type: Actions.REMOVE_SOURCE_FROM_LAYER;
    }
  | {
      data: Partial<ILayer>;
      id: string;
      type: Actions.EDIT_LAYER;
    }
  | {
      id: string;
      type: Actions.REMOVE_LAYER;
    };

export const addLayer = (layer: ILayer): Action => ({
  layer,
  type: Actions.ADD_LAYER,
});

export const addSourceToLayer = (layer: ILayer, source: ILayerSource): Action =>
  addSourceToLayerById(layer.id, source);

export const addSourceToLayerById = (
  id: string,
  source: ILayerSource
): Action => ({
  id,
  source,
  type: Actions.ADD_SOURCE_TO_LAYER,
});

export const removeSourceFromLayer = (
  layer: ILayer,
  source: ILayerSource
): Action => removeSourceFromLayerById(layer.id, source);

export const removeSourceFromLayerById = (
  id: string,
  source: ILayerSource
): Action => ({
  id,
  source,
  type: Actions.REMOVE_SOURCE_FROM_LAYER,
});

export const editLayer = (layer: ILayer, data: ILayer): Action =>
  editLayerById(layer.id, data);

export const editLayerById = (id: string, data: Partial<ILayer>): Action => ({
  data,
  id,
  type: Actions.EDIT_LAYER,
});

export const removeLayer = (layer: ILayer): Action => removeLayerById(layer.id);

export const removeLayerById = (id: string): Action => ({
  id,
  type: Actions.REMOVE_LAYER,
});
