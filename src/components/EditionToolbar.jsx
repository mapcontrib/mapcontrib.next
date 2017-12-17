import React from 'react';
import PropTypes from 'prop-types';
import { BlueTheme, RedTheme, OrangeTheme, Toolbar } from 'osm-ui-react';

const EditionToolbar = ({ onClickEdition, onClickSettings, ...props }) => (
  <BlueTheme>
    <Toolbar opened position="right-bottom" {...props}>
      <OrangeTheme>
        <Toolbar.Item icon="sliders" onClick={() => onClickSettings()} />
      </OrangeTheme>
      <RedTheme>
        <Toolbar.Item icon="pencil" onClick={() => onClickEdition()} />
      </RedTheme>
    </Toolbar>
  </BlueTheme>
);

EditionToolbar.propTypes = {
  onClickEdition: PropTypes.func.isRequired,
  onClickSettings: PropTypes.func.isRequired
};

EditionToolbar.defaultProps = {};

export default EditionToolbar;
