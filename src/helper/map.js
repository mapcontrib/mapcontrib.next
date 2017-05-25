
import tileSourcesReference from '../const/tileSources';
import tileConfigsReference from '../const/tileConfigs';


export const findTileSourcesFromConfigId = configId => {
    const tileConfig = tileConfigsReference.filter(config => config.id === configId)[0];
    return tileSourcesReference.filter(ref => tileConfig.tileSources.indexOf(ref.id) > -1);
};

export const getMinZoomFromTileConfigId = configId => {
    const tileSources = findTileSourcesFromConfigId(configId);
    return tileSources.reduce((acc, val) => acc.minZoom >= val.minZoom ? acc.minZoom : val.minZoom, 0);
};

export const getMaxZoomFromTileConfigId = configId => {
    const tileSources = findTileSourcesFromConfigId(configId);
    return tileSources.reduce((acc, val) => acc.maxZoom <= val.maxZoom ? acc.maxZoom : val.maxZoom, 0);
};
