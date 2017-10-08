import React from 'react';
import { OrangeTheme, Column } from 'osm-ui-react';

const PresetsSettingsColumn = props => (
  <OrangeTheme>
    <Column opened position="right" title="Presets" {...props} />
  </OrangeTheme>
);

PresetsSettingsColumn.propTypes = {};

PresetsSettingsColumn.defaultProps = {};

export default PresetsSettingsColumn;
