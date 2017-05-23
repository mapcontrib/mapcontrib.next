import React from 'react';
import {
    BlueTheme,
    Column,
} from 'osm-ui-react';


const UserColumn = props => (
    <BlueTheme>
        <Column opened position="right" title="User">
            <p>Lorem ipsum...</p>
        </Column>
    </BlueTheme>
);

UserColumn.propTypes = {
};

UserColumn.defaultProps = {
};

export default UserColumn;
