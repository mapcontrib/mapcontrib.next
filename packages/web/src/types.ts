export enum LayerRepresentations {
  MARKER = 'MARKER',
  HEATMAP = 'HEATMAP',
}

export enum SourceTypes {
  OSMOSE = 'OSMOSE',
  OVERPASS = 'OVERPASS',
}

export enum FeatureTypes {
  NODE = 'NODE',
  WAY = 'WAY',
  RELATION = 'RELATION',
}

export interface ILayerFeature {
  id: string | number;
  type: FeatureTypes;
  error_id: string;
}

export interface ILayer {
  description: string;
  id: string;
  isVisible: boolean;
  name: string;
  representationType: LayerRepresentations;
  sources: string[];
  type: SourceTypes;
}

export interface ILayerSource {
  features: ILayerFeature[];
  id: string;
  origin?: ILayer | string;
  type: SourceTypes;
}

export interface ITheme {
  fragment: string;
  path: string;
  title: string;
}

export interface ITileSource {
  id: string;
  name: string;
  attribution: string;
  urlTemplate: string;
  minZoom: number;
  maxZoom: number;
}

export interface ITileConfig {
  id: string;
  tileSources: string[];
}
