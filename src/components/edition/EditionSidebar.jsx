import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RedTheme, Sidebar } from 'osm-ui-react';

const EditSidebar = ({ history, match, themePath, ...props }) => (
  <RedTheme>
    <Sidebar
      opened={!!match}
      position="right"
      title="Edition"
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      <Sidebar.Nav>
        <ul>
          {/* <li>
            <Link to="">Add a missing point</Link>
          </li> */}
          <li>
            <Link to={`${match && match.url}/temp-layers`}>
              Add a temporary data layer
            </Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </RedTheme>
);

EditSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

EditSidebar.defaultProps = {};

EditSidebar.displayName = 'EditSidebar';

export default EditSidebar;
