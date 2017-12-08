import React from 'react';
import { OrangeTheme, Sidebar } from 'osm-ui-react';

const PresetsSettingsSidebar = props => (
  <OrangeTheme>
    <Sidebar opened position="right" title="Presets" {...props} />
  </OrangeTheme>
);

PresetsSettingsSidebar.propTypes = {};

PresetsSettingsSidebar.defaultProps = {};

export default PresetsSettingsSidebar;
