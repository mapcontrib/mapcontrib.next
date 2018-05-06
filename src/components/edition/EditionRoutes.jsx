import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DataLayersSidebar from 'components/edition/DataLayersSidebar';
import EditionSidebar from 'containers/edition/EditionSidebar';
import OsmoseSidebar from 'containers/edition/OsmoseSidebar';
import OsmoseLayerSidebar from 'containers/edition/OsmoseLayerSidebar';

const EditionRoutes = ({ themePath }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/edition"
      children={props => <EditionSidebar themePath={themePath} {...props} />}
    />
    <Route
      exact
      path="/t/:fragment/:title?/edition/temp-layers"
      children={props => <DataLayersSidebar themePath={themePath} {...props} />}
    />
    <Route
      exact
      path="/t/:fragment/:title?/edition/temp-layers/osmose-layer"
      children={props => (
        <OsmoseLayerSidebar themePath={themePath} {...props} />
      )}
    />
    <Route
      exact
      path="/t/:fragment/:title?/edition/osmose/:id"
      children={props => <OsmoseSidebar themePath={themePath} {...props} />}
    />
  </Fragment>
);

EditionRoutes.propTypes = {
  themePath: PropTypes.string.isRequired
};

EditionRoutes.defaultProps = {};

EditionRoutes.displayName = 'EditionRoutes';

export default EditionRoutes;
