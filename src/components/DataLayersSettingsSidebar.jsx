import React from 'react';
import { OrangeTheme, Sidebar } from 'osm-ui-react';

const DataLayersSettingsSidebar = props => (
  <OrangeTheme>
    <Sidebar opened position="right" title="Data layers" {...props} />
  </OrangeTheme>
);

DataLayersSettingsSidebar.propTypes = {};

DataLayersSettingsSidebar.defaultProps = {};

export default DataLayersSettingsSidebar;
