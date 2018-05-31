import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import LayersSidebar from 'containers/layers/LayersSidebar';
import LayerEditionSidebar from 'containers/layers/LayerEditionSidebar';

const LayerRoutes = ({ themePath }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/layers"
      children={props => <LayersSidebar themePath={themePath} {...props} />}
    />
    <Route
      exact
      path="/t/:fragment/:title?/layers/:id"
      children={props => (
        <LayerEditionSidebar themePath={themePath} {...props} />
      )}
    />
  </Fragment>
);

LayerRoutes.propTypes = {
  themePath: PropTypes.string.isRequired
};

LayerRoutes.defaultProps = {};

LayerRoutes.displayName = 'LayerRoutes';

export default LayerRoutes;
