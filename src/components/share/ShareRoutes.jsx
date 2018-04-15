import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ShareSidebar from 'components/share/ShareSidebar';

const ShareRoutes = ({ themePath }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/share"
      children={props => <ShareSidebar themePath={themePath} {...props} />}
    />
  </Fragment>
);

ShareRoutes.propTypes = {
  themePath: PropTypes.string.isRequired
};

ShareRoutes.defaultProps = {};

ShareRoutes.displayName = 'ShareRoutes';

export default ShareRoutes;
