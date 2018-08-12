export function getProjectVersion() {
  return process.env.npm_package_version || '';
}

export function getOsmAuthToken(name: string) {
  return localStorage.getItem(name) || '';
}

export function getInstanceUrl() {
  return window.location.href.replace(/^(\w+:\/\/[\w.:]+).*$/i, '$1');
}
