import Nectarivore from 'leaflet-nectarivore';
import auth from 'osm-auth';
import OsmRequest from 'osm-request';
import OsmoseRequest from 'osmose-request';

import servicesConfig from 'const/servicesConfig.json';
import { getTokensFromLocalStorage } from 'helpers/osm';
import { ILayer, ILayerFeature } from 'types';

const {
  OAUTH_CONSUMER_KEY,
  OAUTH_SECRET,
  OSM_PROD_URL,
  OSMOSE_PROD_URL,
  OVERPASS_PROD_URL,
} = servicesConfig;

const nectarivoreOsmoseOptions = {
  endpoint: OSMOSE_PROD_URL,
  language: 'fr',
  minZoom: 14,
  status: 'open',
};

const nectarivoreOverpassOptions = {
  endpoint: OVERPASS_PROD_URL,
  minZoom: 14,
};

export const nectarivore = {
  createOsmose: (
    item: ILayer | string | undefined,
    onSuccess: (features: ILayerFeature[]) => void
  ) =>
    Nectarivore.osmose({
      ...nectarivoreOsmoseOptions,
      item,
      onSuccess,
    }),
  createOverpass: (query: string, onSuccess: () => void) =>
    Nectarivore.overpass({
      ...nectarivoreOverpassOptions,
      onSuccess,
      query,
    }),
};

export const osmose = new OsmoseRequest({
  endpoint: OSMOSE_PROD_URL,
});

export const osm = { request: null };

const a = new auth({
  auto: true,
  landing: '/land.html',
  oauth_consumer_key: OAUTH_CONSUMER_KEY,
  oauth_secret: OAUTH_SECRET,
});

// console.log('is authenticated', a.authenticated());

new Promise((resolve, reject) => {
  if (!a.authenticated()) {
    // console.log('Authentication...');

    a.authenticate(() => {
      // console.log('Is authenticated', a.authenticated());

      if (a.authenticated()) {
        resolve();
      } else {
        reject('Could not authenticate user');
      }
    });
  } else {
    resolve();
  }
}).then(() => {
  const { apiToken, apiTokenSecret } = getTokensFromLocalStorage();

  osm.request = new OsmRequest({
    endpoint: OSM_PROD_URL,
    oauthConsumerKey: OAUTH_CONSUMER_KEY,
    oauthSecret: OAUTH_SECRET,
    oauthUserToken: apiToken,
    oauthUserTokenSecret: apiTokenSecret,
  });
});
// .catch(err => console.error(err));
