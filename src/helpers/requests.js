import Nectarivore from 'leaflet-nectarivore';
import OsmoseRequest from 'osmose-request';

import { OSMOSE_URL } from 'const/servicesConfig.json';

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
