export enum Actions {
  SET_TILE_CONFIG = 'SET_TILE_CONFIG',
  REMOVE_TILE_CONFIG = 'REMOVE_TILE_CONFIG',
}

export type Action =
  | {
      configId: string;
      index: number;
      type: Actions.SET_TILE_CONFIG;
    }
  | {
      type: Actions.REMOVE_TILE_CONFIG;
      configId: string;
    };

export const setTileConfig = (configId: string, index: number): Action => ({
  configId,
  index,
  type: Actions.SET_TILE_CONFIG,
});

export const removeTileConfig = (configId: string): Action => ({
  configId,
  type: Actions.REMOVE_TILE_CONFIG,
});
