import React from 'react';
import { Link } from 'react-router-dom';
import {
    BlueTheme,
    Column,
} from 'osm-ui-react';


const UserColumn = props => (
    <BlueTheme>
        <Column opened position="right" title="User" {...props}>
            <Column.Nav>
                <ul>
                    <li><Link to="">Home page</Link></li>
                </ul>
                <ul>
                    <li><Link to="">Log in</Link></li>
                    <li><Link to="">Create a theme</Link></li>
                    <li><Link to="">Duplicate that theme</Link></li>
                    <li><Link to="">Favorites</Link></li>
                    <li><Link to="">My themes</Link></li>
                    <li><Link to="">Log out</Link></li>
                </ul>
                <ul>
                    <li><Link to="">Report a bug</Link></li>
                    <li><Link to="">Contact the team</Link></li>
                    <li><Link to="">Project's blog</Link></li>
                    <li><Link to="">Wiki</Link></li>
                    <li><Link to="">About MapContrib</Link></li>
                </ul>
            </Column.Nav>
        </Column>
    </BlueTheme>
);

UserColumn.propTypes = {
};

UserColumn.defaultProps = {
};

export default UserColumn;
