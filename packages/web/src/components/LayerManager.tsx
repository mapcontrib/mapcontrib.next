import { Map as OsmUIMap } from 'osm-ui-react';
import React from 'react';

import { computeId } from 'helpers/osm';
import { nectarivore } from 'helpers/requests';
import { IState as ISourcesState } from 'reducers/sources';
import { ILayer, ILayerFeature, ILayerSource, SourceTypes } from 'types';

export interface IState {
  features: {
    [key: string]: /* sourceId */ Map<string, ILayerFeature>;
  };
  layers: {
    [key: string]: ILayer;
  };
}

export interface IProps {
  layers?: ILayer[];
  sources?: ISourcesState;
  submittedErrors?: string[];
}

class LayerManager extends OsmUIMap.LayerGroup<IProps> {
  public static defaultProps = {
    layers: [],
    sources: {},
    submittedErrors: [],
  };

  public static state: IState = {
    features: {},
    layers: {},
  };

  public componentWillReceiveProps(nextProps: IProps) {
    // This logic will be removed when Nectarivore includes React component exports

    const layers = { ...this.state.layers };
    const features = { ...this.state.features };
    const nextLayers = nextProps.layers || [];

    const currentSources = new Set(Object.keys(layers));
    const futureSources = new Set(
      nextLayers
        .filter(layer => layer.sources && layer.sources.length > 0)
        .reduce((acc, layer) => {
          return acc.concat(layer.sources);
        }, [])
        .map(id => String(id))
    );

    currentSources.forEach(sourceId => {
      if (!futureSources.has(sourceId)) {
        this.context.map.removeLayer(this.state.layers[sourceId]);
        delete layers[sourceId];
        delete features[sourceId];
      }
    });

    futureSources.forEach(sourceId => {
      if (!currentSources.has(sourceId)) {
        const leafletLayer = this.createLeafletLayer(
          nextProps.sources[sourceId]
        );
        this.context.map.addLayer(leafletLayer);

        layers[sourceId] = leafletLayer;
      }
    });

    this.setState({
      layers: layers,
      features: features,
    });
  }

  public render() {
    return (
      <OsmUIMap.LayerGroup>
        {this.props.layers.map(this.renderLayer)}
      </OsmUIMap.LayerGroup>
    );
  }

  private renderLayer = layer => {
    const markers =
      layer.sources &&
      layer.sources.reduce((acc, id) => {
        return acc.concat(this.getMarkers(id));
      }, []);

    return <OsmUIMap.LayerGroup key={layer.id}>{markers}</OsmUIMap.LayerGroup>;
  };

  private updateFeatures = (
    sourceId: string,
    featuresToAdd: ILayerFeature[]
  ) => {
    const features = { ...this.state.features };

    const sourceFeatures = features[sourceId] ? features[sourceId] : new Map();

    featuresToAdd.forEach(feature => {
      const { error_id, id, type } = feature;

      if (error_id) {
        sourceFeatures.set(error_id, feature);
      } else {
        sourceFeatures.set(computeId(type, id.toString()), feature);
      }
    });

    features[sourceId] = sourceFeatures;

    // console.log(`Source ${sourceId}: ${sourceFeatures.size} features`);

    this.setState({
      features,
    });
  };

  private createLeafletLayer = (source: ILayerSource) => {
    // console.log('CREATING LEAFLET LAYER', source.origin);

    // if (source.type === SourceTypes.OVERPASS) {
    //   return nectarivore.createOverpass(source.origin, result => {
    //     this.updateFeatures(source.id, result.elements);
    //   });
    // }

    if (source.type === SourceTypes.OSMOSE) {
      return nectarivore.createOsmose(
        source.origin,
        (features: ILayerFeature[]) => {
          this.updateFeatures(source.id, features);
        }
      );
    }
  };

  private getMarkers = (sourceId: string) => {
    if (!this.state.features[sourceId]) {
      return null;
    }

    const source = this.props.sources[sourceId];
    const features = Array.from(this.state.features[sourceId].values());

    return features.map((point, i) => {
      const wasSubmitted = this.props.submittedErrors.includes(
        parseInt(point.error_id, 10)
      );

      const color =
        source.type === SourceTypes.OVERPASS
          ? 'purple'
          : wasSubmitted
            ? 'green'
            : 'red';

      const icon = source.type === SourceTypes.OVERPASS ? 'info' : 'times';

      return (
        <OsmUIMap.Marker
          position={[parseFloat(point.lat), parseFloat(point.lon)]}
          theme={color}
          shape="pointerClassic"
          icon={icon}
          onClick={
            wasSubmitted
              ? null
              : () => {
                  if (source.type === SourceTypes.OSMOSE) {
                    this.props.openOsmose(point.error_id);
                  }
                }
          }
          key={`${sourceId}/${i}`}
        />
      );
    });
  };
}

export default LayerManager;
