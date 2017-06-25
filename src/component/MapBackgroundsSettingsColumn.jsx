import React from 'react';
import {
    OrangeTheme,
    Column,
} from 'osm-ui-react';


const MapBackgroundsSettingsColumn = props => (
    <OrangeTheme>
        <Column opened position="right" title="Map backgrounds" {...props} />
    </OrangeTheme>
);

MapBackgroundsSettingsColumn.propTypes = {
};

MapBackgroundsSettingsColumn.defaultProps = {
};

export default MapBackgroundsSettingsColumn;
