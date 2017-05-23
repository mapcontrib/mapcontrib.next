import React from 'react';
import {
    RedTheme,
    Column,
} from 'osm-ui-react';


const EditColumn = props => (
    <RedTheme>
        <Column opened position="right" title="Edition">
            <p>Lorem ipsum...</p>
        </Column>
    </RedTheme>
);

EditColumn.propTypes = {
};

EditColumn.defaultProps = {
};

export default EditColumn;
