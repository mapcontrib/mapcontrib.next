import tileConfigsReference from 'const/tileConfigs.json';
import tileSourcesReference from 'const/tileSources.json';

export const findTileSourcesFromConfigId = (configId: string) => {
  const tileConfig = tileConfigsReference.filter(
    config => config.id === configId
  )[0];

  return tileSourcesReference.filter(
    ref => tileConfig.tileSources.indexOf(ref.id) > -1
  );
};

export const getMinZoomFromTileConfigId = (configId: string): number => {
  const tileSources = findTileSourcesFromConfigId(configId);

  return tileSources.reduce(
    (smallestZoom, tileSource) =>
      smallestZoom <= tileSource.minZoom ? smallestZoom : tileSource.minZoom,
    0
  );
};

export const getMaxZoomFromTileConfigId = (configId: string): number => {
  const tileSources = findTileSourcesFromConfigId(configId);

  return tileSources.reduce(
    (biggestZoom, tileSource) =>
      biggestZoom >= tileSource.maxZoom ? biggestZoom : tileSource.maxZoom,
    0
  );
};
