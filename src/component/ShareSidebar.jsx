import React from 'react';
import { GreenTheme, Sidebar } from 'osm-ui-react';

const ShareSidebar = props => (
  <GreenTheme>
    <Sidebar opened position="right" title="Share" {...props}>
      <p>Lorem ipsum...</p>
    </Sidebar>
  </GreenTheme>
);

ShareSidebar.propTypes = {};

ShareSidebar.defaultProps = {};

export default ShareSidebar;
