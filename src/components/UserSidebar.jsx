import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BlueTheme, Sidebar } from 'osm-ui-react';

const UserSidebar = ({ history, themePath, ...props }) => (
  <BlueTheme>
    <Sidebar
      opened
      position="right"
      title="User"
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
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
      </Sidebar.Nav>
    </Sidebar>
  </BlueTheme>
);

UserSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

UserSidebar.defaultProps = {};

UserSidebar.displayName = 'UserSidebar';

export default UserSidebar;
