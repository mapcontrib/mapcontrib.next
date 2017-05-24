import React from 'react';
import { Link } from 'react-router-dom';
import {
    OrangeTheme,
    Column,
    Button,
} from 'osm-ui-react';


const SettingsColumn = props => (
    <OrangeTheme>
        <Column
            opened
            position="right"
            title="Settings"
            footer={(
                <Column.Footer>
                    <Button context="danger" block>Delete that theme</Button>
                </Column.Footer>
            )}
            {...props}
        >
            <Column.Nav>
                <ul>
                    <li><Link to="">General settings</Link></li>
                    <li><Link to="">Data layers</Link></li>
                    <li><Link to="">Map backgrounds</Link></li>
                    <li><Link to="">Custom tags</Link></li>
                    <li><Link to="">Presets</Link></li>
                    <li><Link to="">Translations</Link></li>
                    <li><Link to="">Cache archive</Link></li>
                </ul>
            </Column.Nav>
        </Column>
    </OrangeTheme>
);

SettingsColumn.propTypes = {
};

SettingsColumn.defaultProps = {
};

export default SettingsColumn;
