import React from 'react';
import { Link } from 'react-router-dom';
import { OrangeTheme, Sidebar, Button } from 'osm-ui-react';

const SettingsSidebar = props => (
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

SettingsSidebar.propTypes = {};

SettingsSidebar.defaultProps = {};

export default SettingsSidebar;
