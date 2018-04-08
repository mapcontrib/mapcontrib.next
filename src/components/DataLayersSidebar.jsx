import React from 'react';
import { Link } from 'react-router-dom';
import { RedTheme, Sidebar } from 'osm-ui-react';

const DataLayersSidebar = props => (
  <RedTheme>
    <Sidebar opened position="right" title="Data layers" {...props}>
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to="osmose-layer">Add Osmose Layer</Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </RedTheme>
);

DataLayersSidebar.propTypes = {};

DataLayersSidebar.defaultProps = {};

export default DataLayersSidebar;
