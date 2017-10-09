import React from 'react';
import { WhiteTheme, Sidebar } from 'osm-ui-react';

const MapBackgroundSidebar = props => (
  <WhiteTheme>
    <Sidebar opened title="Map backgrounds" {...props} />
  </WhiteTheme>
);

MapBackgroundSidebar.propTypes = {};

MapBackgroundSidebar.defaultProps = {};

export default MapBackgroundSidebar;
