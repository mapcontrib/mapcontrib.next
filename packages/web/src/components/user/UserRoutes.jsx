import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import UserSidebar from 'components/user/UserSidebar';

const UserRoutes = ({ themePath }) => (
  <Fragment>
    <Route
      exact
      path="/t/:fragment/:title?/user"
      children={props => <UserSidebar themePath={themePath} {...props} />}
    />
  </Fragment>
);

UserRoutes.propTypes = {
  themePath: PropTypes.string.isRequired
};

UserRoutes.defaultProps = {};

UserRoutes.displayName = 'UserRoutes';

export default UserRoutes;
