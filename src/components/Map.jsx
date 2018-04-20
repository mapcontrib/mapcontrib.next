import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map as OsmUIMap } from 'osm-ui-react';
import { OSMOSE_SOURCE } from 'const/layerSource';
import { updateOsmoseLayers } from 'helpers/map';

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
    const future = Object.keys(nextProps.layers).reduce((future, index) => {
      const sources = nextProps.layers[index].sources;
      future.push(...Object.keys(sources).map(i => sources[i].leafletLayer));
      return future;
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

  renderLayer(layerIndex) {
    if (!this.props.layerSourceFeatures[layerIndex]) {
      return null;
    }

    const source = this.props.layers[layerIndex].sources[layerIndex];
    const markers = this.props.layerSourceFeatures[layerIndex].map(
      (point, i) => (
        <OsmUIMap.Marker
          position={[parseFloat(point.lat), parseFloat(point.lon)]}
          theme={'red'}
          shape="pointerClassic"
          icon="times"
          onClick={() => {
            if (source.type === OSMOSE_SOURCE)
              this.props.openOsmose(point.error_id);
          }}
          key={i}
        />
      )
    );

    return <OsmUIMap.LayerGroup key={source.id}>{markers}</OsmUIMap.LayerGroup>;
  }

  render() {
    return (
      <OsmUIMap.LayerGroup>
        {Object.keys(this.props.layers).map(this.renderLayer)}
      </OsmUIMap.LayerGroup>
    );
  }
}

LayerManager.propTypes = {
  layers: PropTypes.object,
  layerSourceFeatures: PropTypes.object
};

LayerManager.defaultProps = {
  layers: {},
  layerSourceFeatures: {}
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
      layerSourceFeatures,
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
          layerSourceFeatures={layerSourceFeatures}
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
  layers: PropTypes.object,
  layerSourceFeatures: PropTypes.object
};

MapComponent.defaultProps = {
  layers: null,
  layerSourceFeatures: null
};

MapComponent.displayName = 'Map';

export default MapComponent;
