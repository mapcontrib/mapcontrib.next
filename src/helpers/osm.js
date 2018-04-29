import { CHANGESET_CREATED_BY, CHANGESET_COMMENT } from 'const/osm';
import {
  getProjectVersion,
  getOsmAuthToken,
  getInstanceUrl
} from 'helpers/storage';

export function computeId(type, id) {
  return `${type}/${id}`;
}

export function cleanOsmAuthToken(token) {
  return (token || '').replace(/"|\\/gi, '');
}

export function getTokensFromLocalStorage() {
  return {
    apiToken: cleanOsmAuthToken(
      getOsmAuthToken('https://api.openstreetmap.org/api/0.6oauth_token')
    ),
    apiTokenSecret: cleanOsmAuthToken(
      getOsmAuthToken('https://api.openstreetmap.org/api/0.6oauth_token_secret')
    ),
    osmToken: getOsmAuthToken('https://www.openstreetmap.orgoauth_token'),
    osmTokenSecret: getOsmAuthToken(
      'https://www.openstreetmap.orgoauth_token_secret'
    )
  };
}

export function buildChangesetCreatedBy() {
  return CHANGESET_CREATED_BY.replace('{version}', getProjectVersion());
}

export function buildChangesetComment(themePath) {
  const url = `${getInstanceUrl()}${themePath}`;
  return CHANGESET_COMMENT.replace('{url}', url);
}
