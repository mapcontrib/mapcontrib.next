import React from 'react';
import { Link } from 'react-router-dom';
import {
    TurquoiseTheme,
    Column,
} from 'osm-ui-react';


const DisplayColumn = props => (
    <TurquoiseTheme>
        <Column opened title="Display" {...props}>
            <Column.Nav>
                <ul>
                    <li><Link to="">Data layers</Link></li>
                    <li><Link to="">Map background</Link></li>
                </ul>
            </Column.Nav>
        </Column>
    </TurquoiseTheme>
);

DisplayColumn.propTypes = {
};

DisplayColumn.defaultProps = {
};

export default DisplayColumn;
