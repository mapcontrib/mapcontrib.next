import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'osm-ui-react';
import LeafletOverpassLayer from 'leaflet-overpass-layer'


export default class OverpassLayer extends Map.LayerGroup {
    componentDidMount() {
        super.componentDidMount();

        const opl = new LeafletOverpassLayer({
            minZoomIndicatorEnabled: false,
            query: this.props.query,
            onSuccess: this._onSuccess,
            onError: this._onError,
            onTimeout: this._onTimeout,
        });

        this.context.map.addLayer(opl);
    }

    _onSuccess() {
        console.log('success');
    }

    _onError() {
        console.log('error');
    }

    _onTimeout() {
        console.log('timeout');
    }

    render() {
        return (
            <Map.LayerGroup>
                <Map.Marker
                    position={[ 51.505, -0.09 ]}
                    shape="shape2"
                    theme="turquoise"
                    icon="check"
                />
            </Map.LayerGroup>
        );
    }
}


OverpassLayer.propTypes = {
    query: PropTypes.string.isRequired,
};

OverpassLayer.defaultProps = {
};
