import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
    Map as LeafletMap,
} from 'osm-ui-react';
import {
    setZoom,
} from '../action/map';


const StyledMap = styled(LeafletMap)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;


class Map extends React.PureComponent {
    _handleZoomend(e) {
        this.props.dispatch(
            setZoom(e.target._zoom)
        );
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
            <StyledMap
                center={[ 51.505, -0.09 ]}
                zoom={zoom}
                minZoom={minZoom}
                maxZoom={maxZoom}
                zoomControl={false}
                onZoomend={e => this._handleZoomend(e)}
                {...props}
            >
                <LeafletMap.TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </StyledMap>
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

const mapStateToProps = (state, props) => ({
    zoom: state.map.zoom,
    minZoom: state.map.minZoom,
    maxZoom: state.map.maxZoom,
});

export default connect(mapStateToProps)(Map);
