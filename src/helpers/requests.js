import Nectarivore from 'leaflet-nectarivore';
import auth from 'osm-auth';
import OsmoseRequest from 'osmose-request';
import OsmRequest from 'osm-request';

import { getTokensFromLocalStorage } from './osm';

import {
  OSMOSE_URL,
  OSM_PROD_URL,
  oauth_secret,
  oauth_consumer_key
} from 'const/servicesConfig.json';

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

export let osm;

var a = auth({
  oauth_secret: oauth_secret,
  oauth_consumer_key: oauth_consumer_key,
  auto: true,
  landing: '../../land.html'
});

console.log('is authenticated', a.authenticated());

new Promise((resolve, reject) => {
  if (!a.authenticated()) {
    console.log('Authentication...');

    a.authenticate(() => {
      console.log('Is authenticated', a.authenticated());

      if (a.authenticated())
        resolve();
      else
        reject('Could not authenticate user');
    });
  }
  else resolve();
})
.then(() => {
  const {
    apiToken,
    apiTokenSecret
  } = getTokensFromLocalStorage();

  osm = new OsmRequest({
    endpoint: OSM_PROD_URL,
    oauthConsumerKey: oauth_consumer_key,
    oauthSecret: oauth_secret,
    oauthUserToken: apiToken,
    oauthUserTokenSecret: apiTokenSecret
  });
})
.catch(err => console.error(err));
