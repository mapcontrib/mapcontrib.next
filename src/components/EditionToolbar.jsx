import React from 'react';
import PropTypes from 'prop-types';
import { BlueTheme, RedTheme, OrangeTheme, Toolbar } from 'osm-ui-react';

const EditionToolbar = ({ history, match, ...props }) => (
  <BlueTheme>
    <Toolbar opened position="right-bottom" {...props}>
      <OrangeTheme>
        <Toolbar.Item
          icon="sliders"
          onClick={() => history.push(`${match.url}/settings`)}
        />
      </OrangeTheme>
      <RedTheme>
        <Toolbar.Item
          icon="pencil"
          onClick={() => history.push(`${match.url}/edition`)}
        />
      </RedTheme>
    </Toolbar>
  </BlueTheme>
);

EditionToolbar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

EditionToolbar.defaultProps = {};

EditionToolbar.displayName = 'EditionToolbar';

export default EditionToolbar;
