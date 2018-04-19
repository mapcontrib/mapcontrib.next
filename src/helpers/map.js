import { OSMOSE_SOURCE } from 'const/layerSource';
import { nectarivore } from 'helpers/requests';
import tileSourcesReference from 'const/tileSources';
import tileConfigsReference from 'const/tileConfigs';
import {
  addLayer,
  removeLayerById,
  addSourceToLayerById
} from 'actions/layers';
import { addFeaturesToSourceById } from 'actions/layerSourceFeatures';

export const findTileSourcesFromConfigId = configId => {
  const tileConfig = tileConfigsReference.filter(
    config => config.id === configId
  )[0];
  return tileSourcesReference.filter(
    ref => tileConfig.tileSources.indexOf(ref.id) > -1
  );
};

export const getMinZoomFromTileConfigId = configId => {
  const tileSources = findTileSourcesFromConfigId(configId);
  return tileSources.reduce(
    (acc, val) => (acc.minZoom >= val.minZoom ? acc.minZoom : val.minZoom),
    0
  );
};

export const getMaxZoomFromTileConfigId = configId => {
  const tileSources = findTileSourcesFromConfigId(configId);
  return tileSources.reduce(
    (acc, val) => (acc.maxZoom <= val.maxZoom ? acc.maxZoom : val.maxZoom),
    0
  );
};

export const updateOsmoseLayers = (layers, selectedItems, dispatch) => {
  const selectedIds = Object.keys(selectedItems).reduce(
    (acc, id) => [...acc, ...selectedItems[id]],
    []
  );

  selectedIds.forEach(id => {
    if (!layers[id]) {
      dispatch(
        addLayer({
          id: id
        })
      );

      dispatch(
        addSourceToLayerById(id, {
          id: id,
          type: OSMOSE_SOURCE,
          leafletLayer: nectarivore.createOsmose(id, features =>
            dispatch(addFeaturesToSourceById(id, features))
          )
        })
      );
    }
  });

  Object.keys(layers).forEach(key => {
    if (!selectedIds.includes(key)) removeLayerById(key);
  });
};
