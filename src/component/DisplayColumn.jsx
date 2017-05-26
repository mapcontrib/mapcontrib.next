import React from 'react';
import { Link } from 'react-router-dom';
import {
    WhiteTheme,
    Column,
} from 'osm-ui-react';


const DisplayColumn = props => (
    <WhiteTheme>
        <Column opened title="Display" {...props}>
            <Column.Nav>
                <ul>
                    <li><Link to="">Data layers</Link></li>
                    <li><Link to="">Map background</Link></li>
                </ul>
            </Column.Nav>
        </Column>
    </WhiteTheme>
);

DisplayColumn.propTypes = {
};

DisplayColumn.defaultProps = {
};

export default DisplayColumn;
