import { CHANGESET_COMMENT, CHANGESET_CREATED_BY } from 'const/osm';
import {
  getInstanceUrl,
  getOsmAuthToken,
  getProjectVersion,
} from 'helpers/storage';

export function computeId(type: string, id: string) {
  return `${type}/${id}`;
}

export function cleanOsmAuthToken(token: string) {
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
    ),
  };
}

export function buildChangesetCreatedBy() {
  return CHANGESET_CREATED_BY.replace('{version}', getProjectVersion());
}

export function buildChangesetComment(themePath: string) {
  const url = `${getInstanceUrl()}${themePath}`;
  return CHANGESET_COMMENT.replace('{url}', url);
}
