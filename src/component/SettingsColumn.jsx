import React from 'react';
import {
    OrangeTheme,
    Column,
} from 'osm-ui-react';


const SettingsColumn = props => (
    <OrangeTheme>
        <Column opened position="right" title="Settings">
            <p>Lorem ipsum...</p>
        </Column>
    </OrangeTheme>
);

SettingsColumn.propTypes = {
};

SettingsColumn.defaultProps = {
};

export default SettingsColumn;
