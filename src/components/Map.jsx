import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { osmose } from '../helpers/requests';
import { Map as OsmUIMap } from 'osm-ui-react';

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

    this.renderLayer = this.renderLayer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // This logic will be removed when Nectarivore includes React component exports
    const { leafletLayers: current } = this.state;
    const future = nextProps.layers.map(layer => layer.leafletLayer);

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

  renderLayer(layer) {
    const markers = layer.points.map((point, i) => (
      <OsmUIMap.Marker
        position={[parseFloat(point.lat), parseFloat(point.lon)]}
        theme={'red'}
        shape="pointerClassic"
        icon="times"
        onClick={() => {
          if (layer.type === 'osmose') this.props.openOsmose(point.error_id);
        }}
        key={i}
      />
    ));

    return <OsmUIMap.LayerGroup key={layer.id}>{markers}</OsmUIMap.LayerGroup>;
  }

  render() {
    return (
      <OsmUIMap.LayerGroup>
        {this.props.layers.map(this.renderLayer)}
      </OsmUIMap.LayerGroup>
    );
  }
}

LayerManager.propTypes = {
  layers: PropTypes.array
};

LayerManager.defaultProps = {
  layers: []
};

class MapComponent extends React.PureComponent {
  _handleZoomend(e) {
    this.props.setMapZoom(e.target._zoom);
  }

  render() {
    const {
      center,
      zoom,
      minZoom,
      maxZoom,
      tileSources,
      layers,
      path,
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
          layers={Object.values(layers.toJS())}
          openOsmose={openOsmose}
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
  layers: PropTypes.object
};

MapComponent.defaultProps = {
  layers: null
};

export default MapComponent;
