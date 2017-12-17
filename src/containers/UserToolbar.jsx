import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from 'components/UserToolbar';

const UserToolbar = ({ match, history }) => (
  <Toolbar
    onClickUser={() => history.push(`${match.url}/user`)}
    onClickShare={() => history.push(`${match.url}/share`)}
  />
);

UserToolbar.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

UserToolbar.defaultProps = {};

export default UserToolbar;
