import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import SettingsSidebar from 'components/settings/SettingsSidebar';
import LayersSidebar from 'components/settings/LayersSidebar';

const SettingsRoutes = ({ themePath, themeTitle }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/settings"
      children={props => <SettingsSidebar themePath={themePath} {...props} />}
    />
    <Route
      exact
      path="/t/:fragment/:title?/settings/layers"
      children={props => <LayersSidebar themePath={themePath} {...props} />}
    />
  </Fragment>
);

SettingsRoutes.propTypes = {
  themePath: PropTypes.string.isRequired,
  themeTitle: PropTypes.string.isRequired
};

SettingsRoutes.defaultProps = {};

SettingsRoutes.displayName = 'SettingsRoutes';

export default SettingsRoutes;
