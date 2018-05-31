import React from 'react';
import PropTypes from 'prop-types';
import { Map as OSMUIMap } from 'osm-ui-react';
import LeafletOverpassLayer from 'leaflet-overpass-layer';
import { computeId } from 'helpers/osm';

export default class OverpassLayer extends OSMUIMap.LayerGroup {
  constructor(props, context) {
    super(props, context);

    this.state = {
      elementsComputedId: [],
      elements: []
    };
  }

  componentDidMount() {
    super.componentDidMount();

    const opl = new LeafletOverpassLayer({
      minZoomIndicatorEnabled: false,
      query: this.props.query,
      minZoom: this.props.minZoom,
      onSuccess: data => this.onSuccess(data),
      onError: () => this.onError(),
      onTimeout: () => this.onTimeout()
    });

    this.context.map.addLayer(opl);
  }

  onSuccess(data) {
    const { elements, elementsComputedId } = this.state;

    const newElements = data.elements.filter(
      element => !elements.includes(computeId(element.type, element.id))
    );
    const newElementsComputedId = newElements.map(element =>
      computeId(element.type, element.id)
    );

    this.setState({
      elements: [...elements, ...newElements],
      elementsComputedId: [...elementsComputedId, ...newElementsComputedId]
    });
  }

  onError() {
    console.log('error');
  }

  onTimeout() {
    console.log('timeout');
  }

  render() {
    return (
      <OSMUIMap.LayerGroup>
        {this.state.elements.map(
          element =>
            element.lat &&
            element.lon && (
              <OSMUIMap.Marker
                key={computeId(element.type, element.id)}
                position={[element.lat, element.lon]}
                shape="pointerClassic"
                theme="purple"
                icon="asterisk"
              />
            )
        )}
      </OSMUIMap.LayerGroup>
    );
  }
}

OverpassLayer.propTypes = {
  query: PropTypes.string.isRequired,
  minZoom: PropTypes.number.isRequired
};

OverpassLayer.defaultProps = {};

OverpassLayer.displayName = 'OverpassLayer';
