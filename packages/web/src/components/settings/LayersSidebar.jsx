import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { OrangeTheme, Sidebar, Button } from 'osm-ui-react';

const LayoutsSidebar = ({ history, match, themePath, ...props }) => (
  <OrangeTheme>
    <Sidebar
      opened={!!match}
      position="right"
      title="Layers"
      footer={
        <Sidebar.Footer>
          <Button block context="primary">
            Add a layer
          </Button>
        </Sidebar.Footer>
      }
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      qsd
    </Sidebar>
  </OrangeTheme>
);

LayoutsSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

LayoutsSidebar.defaultProps = {};

LayoutsSidebar.displayName = 'LayoutsSidebar';

export default LayoutsSidebar;
