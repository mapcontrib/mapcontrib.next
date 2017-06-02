import PropTypes from 'prop-types';
import { Map } from 'osm-ui-react';
import LeafletOverpassLayer from 'leaflet-overpass-layer'


export default class OverpassLayer extends Map.LayerGroup {
    componentDidMount() {
        super.componentDidMount();

        const opl = new LeafletOverpassLayer({
            minZoomIndicatorEnabled: false,
            query: this.props.query,
        });
        this.context.map.addLayer(opl);
    }
}


OverpassLayer.propTypes = {
    query: PropTypes.string.isRequired,
};

OverpassLayer.defaultProps = {
};
