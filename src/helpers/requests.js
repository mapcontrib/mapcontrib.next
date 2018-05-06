import Nectarivore from 'leaflet-nectarivore';
import auth from 'osm-auth';
import OsmoseRequest from 'osmose-request';
import OsmRequest from 'osm-request';

import { getTokensFromLocalStorage } from './osm';

import {
  OSMOSE_PROD_URL,
  OVERPASS_PROD_URL,
  OSM_PROD_URL,
  OAUTH_SECRET,
  OAUTH_CONSUMER_KEY
} from 'const/servicesConfig.json';

const nectarivoreOsmoseOptions = {
  minZoom: 14,
  endpoint: OSMOSE_PROD_URL,
  language: 'fr',
  status: 'open'
};

const nectarivoreOverpassOptions = {
  minZoom: 14,
  endpoint: OVERPASS_PROD_URL
};

export const nectarivore = {
  createOsmose: (item, onSuccess) =>
    Nectarivore.osmose({
      ...nectarivoreOsmoseOptions,
      onSuccess,
      item
    }),
  createOverpass: (query, onSuccess) =>
    Nectarivore.overpass({
      ...nectarivoreOverpassOptions,
      onSuccess,
      query
    })
};

export const osmose = new OsmoseRequest({
  endpoint: OSMOSE_PROD_URL
});

export const osm = { request: null };

var a = auth({
  oauth_secret: OAUTH_SECRET,
  oauth_consumer_key: OAUTH_CONSUMER_KEY,
  auto: true,
  landing: '/land.html'
});

console.log('is authenticated', a.authenticated());

new Promise((resolve, reject) => {
  if (!a.authenticated()) {
    console.log('Authentication...');

    a.authenticate(() => {
      console.log('Is authenticated', a.authenticated());

      if (a.authenticated()) resolve();
      else reject('Could not authenticate user');
    });
  } else resolve();
})
  .then(() => {
    const { apiToken, apiTokenSecret } = getTokensFromLocalStorage();

    osm.request = new OsmRequest({
      endpoint: OSM_PROD_URL,
      oauthConsumerKey: OAUTH_CONSUMER_KEY,
      oauthSecret: OAUTH_SECRET,
      oauthUserToken: apiToken,
      oauthUserTokenSecret: apiTokenSecret
    });
  })
  .catch(err => console.error(err));
