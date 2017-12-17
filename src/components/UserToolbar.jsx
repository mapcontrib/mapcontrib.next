import React from 'react';
import PropTypes from 'prop-types';
import { BlueTheme, GreenTheme, Toolbar } from 'osm-ui-react';

const UserToolbar = ({ onClickUser, onClickShare, ...props }) => (
  <BlueTheme>
    <Toolbar opened position="right-top" {...props}>
      <BlueTheme>
        <Toolbar.Item icon="user" onClick={() => onClickUser()} />
      </BlueTheme>
      <GreenTheme>
        <Toolbar.Item icon="share-alt" onClick={() => onClickShare()} />
      </GreenTheme>
    </Toolbar>
  </BlueTheme>
);

UserToolbar.propTypes = {
  onClickUser: PropTypes.func.isRequired,
  onClickShare: PropTypes.func.isRequired
};

UserToolbar.defaultProps = {};

export default UserToolbar;
