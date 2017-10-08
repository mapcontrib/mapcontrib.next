import React from 'react';
import { OrangeTheme, Column } from 'osm-ui-react';

const DataLayersSettingsColumn = props => (
  <OrangeTheme>
    <Column opened position="right" title="Data layers" {...props} />
  </OrangeTheme>
);

DataLayersSettingsColumn.propTypes = {};

DataLayersSettingsColumn.defaultProps = {};

export default DataLayersSettingsColumn;
