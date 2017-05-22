import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Map as LeafletMap,
} from 'osm-ui-react';


const StyledMap = styled(LeafletMap)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;


const Map = ({
    center,
    zoom,
    ...props,
}) => (
    <StyledMap
        center={center}
        zoom={zoom}
        zoomControl={false}
    >
        <LeafletMap.TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
    </StyledMap>
);


Map.propTypes = {
    center: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
};

Map.defaultProps = {
};

export default Map;
