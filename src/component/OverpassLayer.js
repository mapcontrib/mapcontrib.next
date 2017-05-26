import { Map } from 'osm-ui-react';
import LeafletOverpassLayer from 'leaflet-overpass-layer'


export default class OverpassLayer extends Map.LayerGroup {
    componentDidMount() {
        super.componentDidMount();

        const opl = new LeafletOverpassLayer({
            'query': ''
            + '('
            + 'node["amenity"]({{bbox}});'
            + 'way["amenity"]({{bbox}});'
            + 'relation["amenity"]({{bbox}});'
            + ');'
            + 'out body;'
            + '>;'
            + 'out skel qt;'
        });
        this.context.map.addLayer(opl);
    }
}
