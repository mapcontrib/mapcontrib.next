import { version } from '../../package.json';

export function getProjectVersion() {
  return version;
}

export function getOsmAuthToken(name) {
  return localStorage.getItem(name);
}

export function getInstanceUrl() {
  return window.location.href.replace(/^(\w+:\/\/[\w.:]+).*$/i, '$1');
}
