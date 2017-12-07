import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'osm-ui-react';
import LeafletOverpassLayer from 'leaflet-overpass-layer';
import { computeId } from '../helper/osm';

export default class OverpassLayer extends Map.LayerGroup {
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
      <Map.LayerGroup>
        {this.state.elements.map(
          element =>
            element.lat &&
            element.lon && (
              <Map.Marker
                key={computeId(element.type, element.id)}
                position={[element.lat, element.lon]}
                shape="pointerClassic"
                theme="turquoise"
                icon="recycle"
              />
            )
        )}
      </Map.LayerGroup>
    );
  }
}

OverpassLayer.propTypes = {
  query: PropTypes.string.isRequired,
  minZoom: PropTypes.number.isRequired
};

OverpassLayer.defaultProps = {};
