import React from 'react';
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
            ...props,
        } = this.props;

        return (
            <StyledMap
                center={[ 51.505, -0.09 ]}
                zoom={zoom}
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
};

Map.defaultProps = {
};

const mapStateToProps = (state, props) => ({
    zoom: state.map.zoom,
});

export default connect(mapStateToProps)(Map);
