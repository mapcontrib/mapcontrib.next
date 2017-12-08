import React from 'react';
import { OrangeTheme, Sidebar } from 'osm-ui-react';

const CustomTagsSettingsSidebar = props => (
  <OrangeTheme>
    <Sidebar opened position="right" title="Custom tags" {...props} />
  </OrangeTheme>
);

CustomTagsSettingsSidebar.propTypes = {};

CustomTagsSettingsSidebar.defaultProps = {};

export default CustomTagsSettingsSidebar;
