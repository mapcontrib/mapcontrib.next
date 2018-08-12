export enum Actions {
  INCREASE_MAP_ZOOM = 'INCREASE_MAP_ZOOM',
  DECREASE_MAP_ZOOM = 'DECREASE_MAP_ZOOM',
  SET_MAP_ZOOM = 'SET_MAP_ZOOM',
  SET_MAP_MIN_ZOOM = 'SET_MAP_MIN_ZOOM',
  SET_MAP_MAX_ZOOM = 'SET_MAP_MAX_ZOOM',
  SET_MAP_TILE_CONFIG_ID = 'SET_MAP_TILE_CONFIG_ID',
}

export type Action =
  | {
      type: Actions.INCREASE_MAP_ZOOM;
    }
  | {
      type: Actions.DECREASE_MAP_ZOOM;
    }
  | {
      type: Actions.SET_MAP_ZOOM;
      zoom: number;
    }
  | {
      minZoom: number;
      type: Actions.SET_MAP_MIN_ZOOM;
    }
  | {
      maxZoom: number;
      type: Actions.SET_MAP_MAX_ZOOM;
    }
  | {
      configId: string;
      type: Actions.SET_MAP_TILE_CONFIG_ID;
    };

export const increaseMapZoom = (): Action => ({
  type: Actions.INCREASE_MAP_ZOOM,
});

export const decreaseMapZoom = (): Action => ({
  type: Actions.DECREASE_MAP_ZOOM,
});

export const setMapZoom = (zoom: number): Action => ({
  type: Actions.SET_MAP_ZOOM,
  zoom,
});

export const setMapMinZoom = (minZoom: number): Action => ({
  minZoom,
  type: Actions.SET_MAP_MIN_ZOOM,
});

export const setMapMaxZoom = (maxZoom: number): Action => ({
  maxZoom,
  type: Actions.SET_MAP_MAX_ZOOM,
});

export const setMapTileConfigId = (configId: string): Action => ({
  configId,
  type: Actions.SET_MAP_TILE_CONFIG_ID,
});
