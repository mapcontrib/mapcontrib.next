// FIXME
declare module 'diacritic';
declare module 'leaflet-nectarivore';
declare module 'osm-request';
declare module 'osm-ui-react';
declare module 'redux-localstorage';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare module 'const/tileConfigs.json' {
  import { ITileConfig } from 'types';

  const value: ITileConfig[];
  export default value;
}

declare module 'const/tileSources.json' {
  import { ITileSource } from 'types';

  const value: ITileSource[];
  export default value;
}
