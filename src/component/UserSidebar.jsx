import React from 'react';
import { Link } from 'react-router-dom';
import { BlueTheme, Sidebar } from 'osm-ui-react';

const UserSidebar = props => (
  <BlueTheme>
    <Sidebar opened position="right" title="User" {...props}>
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to="">Home page</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">Log in</Link>
          </li>
          <li>
            <Link to="">Create a theme</Link>
          </li>
          <li>
            <Link to="">Duplicate that theme</Link>
          </li>
          <li>
            <Link to="">Favorites</Link>
          </li>
          <li>
            <Link to="">My themes</Link>
          </li>
          <li>
            <Link to="">Log out</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">Report a bug</Link>
          </li>
          <li>
            <Link to="">Contact the team</Link>
          </li>
          <li>
            <Link to="">Project's blog</Link>
          </li>
          <li>
            <Link to="">Wiki</Link>
          </li>
          <li>
            <Link to="">About MapContrib</Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </BlueTheme>
);

UserSidebar.propTypes = {};

UserSidebar.defaultProps = {};

export default UserSidebar;
