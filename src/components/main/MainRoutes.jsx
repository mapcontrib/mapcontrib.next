import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import MainSidebar from 'components/main/MainSidebar';

const MainRoutes = ({ themePath, themeTitle }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/menu"
      children={props => (
        <MainSidebar themePath={themePath} themeTitle={themeTitle} {...props} />
      )}
    />
  </Fragment>
);

MainRoutes.propTypes = {
  themePath: PropTypes.string.isRequired,
  themeTitle: PropTypes.string.isRequired
};

MainRoutes.defaultProps = {};

MainRoutes.displayName = 'MainRoutes';

export default MainRoutes;
