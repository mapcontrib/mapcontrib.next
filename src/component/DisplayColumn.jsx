import React from 'react';
import {
    Column,
} from 'osm-ui-react';


const DisplayColumn = props => (
    <Column opened title="Display">
        <Column.Nav>
            <ul>
                <li><a href="">Data layers</a></li>
                <li><a href="">Map background</a></li>
            </ul>
        </Column.Nav>
    </Column>
);

DisplayColumn.propTypes = {
};

DisplayColumn.defaultProps = {
};

export default DisplayColumn;
