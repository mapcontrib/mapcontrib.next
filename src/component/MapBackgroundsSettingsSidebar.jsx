import React from 'react';
import { OrangeTheme, Sidebar } from 'osm-ui-react';

const MapBackgroundsSettingsSidebar = props => (
  <OrangeTheme>
    <Sidebar opened position="right" title="Map backgrounds" {...props} />
  </OrangeTheme>
);

MapBackgroundsSettingsSidebar.propTypes = {};

MapBackgroundsSettingsSidebar.defaultProps = {};

export default MapBackgroundsSettingsSidebar;
