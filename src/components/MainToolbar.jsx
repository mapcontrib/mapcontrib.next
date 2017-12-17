import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Toolbar } from 'osm-ui-react';

const MainToolbar = ({
  zoom,
  onClickMainMenu,
  onClickIncreaseZoom,
  onClickDecreaseZoom,
  ...props
}) => (
  <WhiteTheme>
    <Toolbar opened position="left-top" {...props}>
      <Toolbar.Item icon="bars" onClick={() => onClickMainMenu()} />
      <Toolbar.Group>
        <Toolbar.Item icon="plus" onClick={() => onClickIncreaseZoom()} />
        <Toolbar.Item icon="minus" onClick={() => onClickDecreaseZoom()} />
        <Toolbar.Item inactive>{zoom}</Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  </WhiteTheme>
);

MainToolbar.propTypes = {
  zoom: PropTypes.number.isRequired,
  onClickMainMenu: PropTypes.func.isRequired,
  onClickIncreaseZoom: PropTypes.func.isRequired,
  onClickDecreaseZoom: PropTypes.func.isRequired
};

MainToolbar.defaultProps = {};

export default MainToolbar;
