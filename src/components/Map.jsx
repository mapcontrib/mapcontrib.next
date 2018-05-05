import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map as OsmUIMap } from 'osm-ui-react';
import { sourceTypes } from 'const/layers';
// import { updateOsmoseLayers } from 'helpers/map';

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
      leafletLayers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // This logic will be removed when Nectarivore includes React component exports
    const { leafletLayers: current } = this.state;
    const future = Object.values(nextProps.sources).reduce((acc, source) => {
      acc.push(source.leafletLayer);
      return acc;
    }, []);

    current.forEach(layer => {
      if (!future.find(futLayer => layer.id === futLayer.id)) {
        this.context.map.removeLayer(layer);
      }
    });

    future.forEach(layer => {
      if (!current.find(curLayer => layer.id === curLayer.id)) {
        this.context.map.addLayer(layer);
      }
    });

    this.setState({
      leafletLayers: future
    });
  }

  getMarkers = source => {
    return (
      source.features &&
      source.features.map((point, i) => {
        const wasSubmitted = this.props.submittedErrors.includes(
          parseInt(point.error_id, 10)
        );

        return (
          <OsmUIMap.Marker
            position={[parseFloat(point.lat), parseFloat(point.lon)]}
            theme={wasSubmitted ? 'green' : 'red'}
            shape="pointerClassic"
            icon="times"
            onClick={
              wasSubmitted
                ? null
                : () => {
                    if (source.type === sourceTypes.OSMOSE)
                      this.props.openOsmose(point.error_id);
                  }
            }
            key={i}
          />
        );
      })
    );
  };

  renderLayer = layer => {
    const { sources } = this.props;

    const markers =
      layer.sources &&
      layer.sources.reduce((acc, sourceId) => {
        return acc.concat(this.getMarkers(sources[sourceId]));
      }, []);

    return <OsmUIMap.LayerGroup key={layer.id}>{markers}</OsmUIMap.LayerGroup>;
  };

  render() {
    return (
      <OsmUIMap.LayerGroup>
        {Object.values(this.props.layers).map(this.renderLayer)}
      </OsmUIMap.LayerGroup>
    );
  }
}

LayerManager.propTypes = {
  layers: PropTypes.object,
  sources: PropTypes.object,
  submittedErrors: PropTypes.array
};

LayerManager.defaultProps = {
  layers: {},
  sources: {},
  submittedErrors: []
};

class MapComponent extends React.PureComponent {
  updateOsmoseLayers = () => {
    // FIXME - To remove
    const { addOsmoseLayer } = this.props;

    const selectedItems = JSON.parse(
      window.localStorage.getItem('osmoseSelectedItems') || '{}'
    );

    if (Object.keys(selectedItems).length > 0) {
      const selectedIds = Object.keys(selectedItems).reduce(
        (acc, id) => [...acc, ...selectedItems[id]],
        []
      );

      selectedIds.forEach(addOsmoseLayer);
    }
  };

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
        whenReady={this.updateOsmoseLayers}
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
  addOsmoseLayer: PropTypes.func.isRequired,
  layers: PropTypes.object,
  sources: PropTypes.object,
  submittedErrors: PropTypes.array
};

MapComponent.defaultProps = {
  layers: [],
  sources: []
};

MapComponent.displayName = 'Map';

export default MapComponent;
