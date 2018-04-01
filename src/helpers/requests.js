import { OSMOSE_URL } from '../const/urls';
import Nectarivore from 'leaflet-nectarivore';
import OsmoseRequest from 'osmose-request';

const nectarivoreOsmoseOptions = {
  minZoom: 14,
  endpoint: OSMOSE_URL,
  language: 'fr',
  status: 'open'
};

export const nectarivore = {
  createOsmose: (item, onSuccess) =>
    Nectarivore.osmose({
      ...nectarivoreOsmoseOptions,
      onSuccess,
      item
    })
};

export const osmose = new OsmoseRequest({
  endpoint: OSMOSE_URL
});
