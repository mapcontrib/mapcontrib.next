import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Map as LeafletMap,
} from 'osm-ui-react';

import { setMapZoom } from '../action/map';
import MapComponent from '../component/Map';

import { findTileSourcesFromConfigId } from '../helper/map';




class Map extends React.PureComponent {
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
                {
                    tileSources.map(tileSource => (
                        <LeafletMap.TileLayer
                            key={tileSource.id}
                            url={tileSource.urlTemplate}
                            attribution={tileSource.attribution}
                            minZoom={tileSource.minZoom}
                            maxZoom={tileSource.maxZoom}
                            test={console.log(tileSource)}
                        />
                    ))
                }
            </MapComponent>
        );
    }
}


Map.propTypes = {
    zoom: PropTypes.number.isRequired,
    minZoom: PropTypes.number.isRequired,
    maxZoom: PropTypes.number.isRequired,
    tileSources: PropTypes.array.isRequired,
};

Map.defaultProps = {
};

const mapStateToProps = state => ({
    zoom: state.map.zoom,
    minZoom: state.map.minZoom,
    maxZoom: state.map.maxZoom,
    tileSources: findTileSourcesFromConfigId(state.map.tileConfigId)
});

const mapDispatchToProps = dispatch => ({
    setMapZoom: zoom => dispatch(setMapZoom(zoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
