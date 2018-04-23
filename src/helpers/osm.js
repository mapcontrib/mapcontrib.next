export const computeId = (type, id) => `${type}/${id}`;

const cleanToken = token => token.replace(/"|\\/gi, '');

export const getTokensFromLocalStorage = () => ({
  apiToken: cleanToken(localStorage['https://api.openstreetmap.org/api/0.6oauth_token']),
  apiTokenSecret: cleanToken(localStorage['https://api.openstreetmap.org/api/0.6oauth_token_secret']),
  osmToken: localStorage['https://www.openstreetmap.orgoauth_token'],
  osmTokenSecret: localStorage['https://www.openstreetmap.orgoauth_token_secret']
});
