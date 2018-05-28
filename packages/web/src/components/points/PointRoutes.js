import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import OsmoseSidebar from 'containers/points/OsmoseSidebar';

const PointRoutes = ({ themePath }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/points/osmose/:id"
      children={props => <OsmoseSidebar themePath={themePath} {...props} />}
    />
  </Fragment>
);

PointRoutes.propTypes = {
  themePath: PropTypes.string.isRequired
};

PointRoutes.defaultProps = {};

PointRoutes.displayName = 'PointRoutes';

export default PointRoutes;
