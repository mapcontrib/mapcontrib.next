import React from 'react';
import PropTypes from 'prop-types';
import { GreenTheme, Sidebar } from 'osm-ui-react';

const ShareSidebar = ({ history, match, themePath, ...props }) => (
  <GreenTheme>
    <Sidebar
      opened={!!match}
      position="right"
      title="Share"
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      <p>Lorem ipsum...</p>
    </Sidebar>
  </GreenTheme>
);

ShareSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

ShareSidebar.defaultProps = {};

ShareSidebar.displayName = 'ShareSidebar';

export default ShareSidebar;
