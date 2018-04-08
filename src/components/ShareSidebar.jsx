import React from 'react';
import PropTypes from 'prop-types';
import { GreenTheme, Sidebar } from 'osm-ui-react';

const ShareSidebar = ({ history, themePath, ...props }) => (
  <GreenTheme>
    <Sidebar
      opened
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
