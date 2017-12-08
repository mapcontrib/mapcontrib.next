import React from 'react';
import { OrangeTheme, Sidebar } from 'osm-ui-react';

const TranslationsSettingsSidebar = props => (
  <OrangeTheme>
    <Sidebar opened position="right" title="Translations" {...props} />
  </OrangeTheme>
);

TranslationsSettingsSidebar.propTypes = {};

TranslationsSettingsSidebar.defaultProps = {};

export default TranslationsSettingsSidebar;
