import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Toolbar } from 'osm-ui-react';

const MainToolbar = ({
  zoom,
  increaseZoom,
  decreaseZoom,
  history,
  match,
  ...props
}) => (
  <WhiteTheme>
    <Toolbar opened position="left-top" {...props}>
      <Toolbar.Item
        icon="bars"
        onClick={() => history.replace(`${match.url}/menu`)}
      />
      <Toolbar.Group>
        <Toolbar.Item icon="plus" onClick={() => increaseZoom()} />
        <Toolbar.Item icon="minus" onClick={() => decreaseZoom()} />
        <Toolbar.Item inactive>{zoom}</Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  </WhiteTheme>
);

MainToolbar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  increaseZoom: PropTypes.func.isRequired,
  decreaseZoom: PropTypes.func.isRequired
};

MainToolbar.defaultProps = {};

MainToolbar.displayName = 'MainToolbar';

export default MainToolbar;
