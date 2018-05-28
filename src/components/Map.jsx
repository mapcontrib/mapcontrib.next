import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map as OsmUIMap } from 'osm-ui-react';
import { nectarivore } from 'helpers/requests';
import { computeId } from 'helpers/osm';
import { sourceTypes } from 'const/layers';

const StyledMap = styled(OsmUIMap)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

class LayerManager extends OsmUIMap.LayerGroup {
  constructor(props) {
    super(props);

    this.state = {
      layers: {
        /* sourceId : layer */
      },
      features: {
        /* sourceId : featureId => feature */
      }
    };
  }

  updateFeatures = (sourceId, featuresToAdd) => {
    const features = { ...this.state.features };

    const sourceFeatures = features[sourceId] ? features[sourceId] : new Map();

    featuresToAdd.forEach(feature => {
      const { error_id, id, type } = feature;

      if (error_id) sourceFeatures.set(error_id, feature);
      else sourceFeatures.set(computeId(type, id), feature);
    });

    features[sourceId] = sourceFeatures;

    console.log(`Source ${sourceId}: ${sourceFeatures.size} features`);

    this.setState({
      features: features
    });
  };

  createLeafletLayer = source => {
    console.log('CREATING LEAFLET LAYER', source.origin);

    if (source.type === sourceTypes.OVERPASS) {
      return nectarivore.createOverpass(source.origin, result => {
        this.updateFeatures(source.id, result.elements);
      });
    } else if (source.type === sourceTypes.OSMOSE) {
      return nectarivore.createOsmose(source.origin, features => {
        this.updateFeatures(source.id, features);
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    // This logic will be removed when Nectarivore includes React component exports

    const layers = { ...this.state.layers };
    const features = { ...this.state.features };

    const currentSources = new Set(Object.keys(layers));
    const futureSources = new Set(
      nextProps.layers
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
      features: features
    });
  }

  getMarkers = sourceId => {
    if (!this.state.features[sourceId]) return null;

    const source = this.props.sources[sourceId];
    const features = Array.from(this.state.features[sourceId].values());

    return features.map((point, i) => {
      const wasSubmitted = this.props.submittedErrors.includes(
        parseInt(point.error_id, 10)
      );

      const color =
        source.type === sourceTypes.OVERPASS
          ? 'purple'
          : wasSubmitted ? 'green' : 'red';

      const icon = source.type === sourceTypes.OVERPASS ? 'info' : 'times';

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
                  if (source.type === sourceTypes.OSMOSE)
                    this.props.openOsmose(point.error_id);
                }
          }
          key={`${sourceId}/${i}`}
        />
      );
    });
  };

  renderLayer = layer => {
    const markers =
      layer.sources &&
      layer.sources.reduce((acc, id) => {
        return acc.concat(this.getMarkers(id));
      }, []);

    return <OsmUIMap.LayerGroup key={layer.id}>{markers}</OsmUIMap.LayerGroup>;
  };

  render() {
    return (
      <OsmUIMap.LayerGroup>
        {this.props.layers.map(this.renderLayer)}
      </OsmUIMap.LayerGroup>
    );
  }
}

LayerManager.propTypes = {
  layers: PropTypes.array,
  sources: PropTypes.object,
  submittedErrors: PropTypes.array
};

LayerManager.defaultProps = {
  layers: [],
  sources: {},
  submittedErrors: []
};

class MapComponent extends React.Component {
  _handleZoomend(e) {
    this.props.setMapZoom(e.target._zoom);
  }

  componentDidMount() {
    this.props.setMapZoom(this.props.zoom + 1);
    this.props.setMapZoom(this.props.zoom - 1);
  }

  render() {
    const {
      zoom,
      minZoom,
      maxZoom,
      tileSources,
      layers,
      submittedErrors,
      sources,
      openOsmose,
      ...props
    } = this.props;

    return (
      <StyledMap
        center={[44.8637226, -0.6212462]}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        onZoomend={e => this._handleZoomend(e)}
        attributionControl={false}
        zoomControl={false}
        whenReady={this.updateLayers}
        {...props}
      >
        {tileSources.map(tileSource => (
          <OsmUIMap.TileLayer
            key={tileSource.id}
            url={tileSource.urlTemplate}
            attribution={tileSource.attribution}
            minZoom={tileSource.minZoom}
            maxZoom={tileSource.maxZoom}
          />
        ))}
        <OsmUIMap.AttributionControl position="bottomleft" />
        <OsmUIMap.ScaleControl position="bottomleft" />
        <LayerManager
          layers={layers}
          sources={sources}
          openOsmose={openOsmose}
          submittedErrors={submittedErrors}
        />
      </StyledMap>
    );
  }
}

MapComponent.propTypes = {
  zoom: PropTypes.number.isRequired,
  minZoom: PropTypes.number.isRequired,
  maxZoom: PropTypes.number.isRequired,
  tileSources: PropTypes.array.isRequired,
  openOsmose: PropTypes.func.isRequired,
  setMapZoom: PropTypes.func.isRequired,
  layers: PropTypes.array,
  sources: PropTypes.object,
  submittedErrors: PropTypes.array
};

MapComponent.defaultProps = {
  layers: [],
  sources: {},
  submittedErrors: []
};

MapComponent.displayName = 'Map';

export default MapComponent;
