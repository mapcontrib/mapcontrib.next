import {
  buildChangesetComment,
  buildChangesetCreatedBy,
  computeId,
  cleanOsmAuthToken,
  getTokensFromLocalStorage
} from 'helpers/osm';

jest.mock('helpers/storage');

describe('OSM helpers', () => {
  it('Should build a changeset comment', () => {
    // Based on the mocks
    const instanceUrl = 'https://www.mapcontrib.xyz';
    const themePath = '/a_theme_url';
    const fullUrl = `${instanceUrl}${themePath}`;
    const result = buildChangesetComment(themePath);
    const expected = `Contribution sent from the following MapContrib theme: ${fullUrl}`;
    expect(result).toBe(expected);
  });

  it('Should build a changeset "created by"', () => {
    const result = buildChangesetCreatedBy();
    // Based on the mocks
    const expected = 'MapContrib 1.2.3';
    expect(result).toBe(expected);
  });

  it('Should build a full OSM ID', () => {
    const result = computeId('node', '4567');
    const expected = 'node/4567';
    expect(result).toBe(expected);
  });

  it('Should clean an osm-auth token', () => {
    const result = cleanOsmAuthToken('aze"aze\\aze');
    const expected = 'azeazeaze';
    expect(result).toBe(expected);
  });

  it('Should clean an osm-auth token', () => {
    const result = getTokensFromLocalStorage();
    const expected = {
      apiToken:
        'Value of the https://api.openstreetmap.org/api/0.6oauth_token token',
      apiTokenSecret:
        'Value of the https://api.openstreetmap.org/api/0.6oauth_token_secret token',
      osmToken: 'Value of the https://www.openstreetmap.orgoauth_token token',
      osmTokenSecret:
        'Value of the https://www.openstreetmap.orgoauth_token_secret token'
    };
    expect(result).toEqual(expected);
  });
});
