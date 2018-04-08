import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { OrangeTheme, Sidebar, Button } from 'osm-ui-react';

const SettingsSidebar = ({ history, themePath, ...props }) => (
  <OrangeTheme>
    <Sidebar
      opened
      position="right"
      title="Settings"
      footer={
        <Sidebar.Footer>
          <Button context="danger" block>
            Delete that theme
          </Button>
        </Sidebar.Footer>
      }
      onClickClose={() => history.replace(themePath)}
      {...props}
    >
      <Sidebar.Nav>
        <ul>
          <li>
            <Link to="">General settings</Link>
          </li>
          <li>
            <Link to="">Cache archive</Link>
          </li>
        </ul>
      </Sidebar.Nav>
    </Sidebar>
  </OrangeTheme>
);

SettingsSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

SettingsSidebar.defaultProps = {};

SettingsSidebar.displayName = 'SettingsSidebar';

export default SettingsSidebar;
