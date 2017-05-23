import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Map as LeafletMap,
} from 'osm-ui-react';

import { setZoom } from '../action/map';
import MapComponent from '../component/Map';




class Map extends React.PureComponent {
    _handleZoomend(e) {
        this.props.setZoom(e.target._zoom);
    }

    render() {
        const {
            center,
            zoom,
            minZoom,
            maxZoom,
            ...props,
        } = this.props;

        return (
            <MapComponent
                center={[ 51.505, -0.09 ]}
                zoom={zoom}
                minZoom={minZoom}
                maxZoom={maxZoom}
                onZoomend={e => this._handleZoomend(e)}
                {...props}
            >
                <LeafletMap.TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapComponent>
        );
    }
}


Map.propTypes = {
    zoom: PropTypes.number.isRequired,
    minZoom: PropTypes.number.isRequired,
    maxZoom: PropTypes.number.isRequired,
};

Map.defaultProps = {
};

const mapStateToProps = state => ({
    zoom: state.map.zoom,
    minZoom: state.map.minZoom,
    maxZoom: state.map.maxZoom,
});

const mapDispatchToProps = dispatch => ({
    setZoom: zoom => dispatch(setZoom(zoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
