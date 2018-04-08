import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { WhiteTheme, Sidebar } from 'osm-ui-react';

const MainSidebar = ({ history, themePath, themeTitle, ...props }) => (
  <WhiteTheme>
    <Sidebar
      opened
      position="left"
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      <Sidebar.Title>{themeTitle}</Sidebar.Title>
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to="">Search me</Link>
          </li>
          <li>
            <Link to="">Search address</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">Data layers</Link>
          </li>
          <li>
            <Link to="">Tiles</Link>
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
  </WhiteTheme>
);

MainSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired,
  themeTitle: PropTypes.string.isRequired
};

MainSidebar.defaultProps = {};

MainSidebar.displayName = 'MainSidebar';

export default MainSidebar;
