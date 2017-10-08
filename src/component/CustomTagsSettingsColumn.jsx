import React from 'react';
import { OrangeTheme, Column } from 'osm-ui-react';

const CustomTagsSettingsColumn = props => (
  <OrangeTheme>
    <Column opened position="right" title="Custom tags" {...props} />
  </OrangeTheme>
);

CustomTagsSettingsColumn.propTypes = {};

CustomTagsSettingsColumn.defaultProps = {};

export default CustomTagsSettingsColumn;
