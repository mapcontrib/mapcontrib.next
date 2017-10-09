import React from 'react';
import { Link } from 'react-router-dom';
import { RedTheme, Sidebar } from 'osm-ui-react';

const EditSidebar = props => (
  <RedTheme>
    <Sidebar opened position="right" title="Edition" {...props}>
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to="">Add a missing point</Link>
          </li>
          <li>
            <Link to="">Add a temporary data layer</Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </RedTheme>
);

EditSidebar.propTypes = {};

EditSidebar.defaultProps = {};

export default EditSidebar;
