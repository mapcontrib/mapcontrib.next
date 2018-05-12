import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Toolbar } from 'osm-ui-react';

const EditionToolbar = ({ history, match, ...props }) => (
  <RedTheme>
    <Toolbar opened position="right-bottom" {...props}>
      <RedTheme>
        <Toolbar.Item
          icon="pencil"
          onClick={() => history.push(`${match.url}/edition`)}
        />
      </RedTheme>
    </Toolbar>
  </RedTheme>
);

EditionToolbar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

EditionToolbar.defaultProps = {};

EditionToolbar.displayName = 'EditionToolbar';

export default EditionToolbar;