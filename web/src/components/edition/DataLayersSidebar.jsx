import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RedTheme, Sidebar } from 'osm-ui-react';

const DataLayersSidebar = ({ history, match, themePath, ...props }) => (
  <RedTheme>
    <Sidebar
      opened={!!match}
      position="right"
      title="Data layers"
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to={`${match && match.url}/osmose-layer`}>
              Add an Osmose Layer
            </Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </RedTheme>
);

DataLayersSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

DataLayersSidebar.defaultProps = {};

DataLayersSidebar.displayName = 'DataLayersSidebar';

export default DataLayersSidebar;
