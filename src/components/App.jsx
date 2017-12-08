import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { WhiteTheme, Section } from 'osm-ui-react';

import Theme from 'containers/Theme';
import DataLayersSidebar from 'containers/DataLayersSidebar';
import MapBackgroundsSidebar from 'containers/MapBackgroundsSidebar';
import UserSidebar from 'containers/UserSidebar';
import ShareSidebar from 'containers/ShareSidebar';
import EditionSidebar from 'containers/EditionSidebar';
import SettingsSidebar from 'containers/SettingsSidebar';
import DataLayersSettingsSidebar from 'containers/DataLayersSettingsSidebar';
import MapBackgroundsSettingsSidebar from 'containers/MapBackgroundsSettingsSidebar';
import CustomTagsSettingsSidebar from 'containers/CustomTagsSettingsSidebar';
import PresetsSettingsSidebar from 'containers/PresetsSettingsSidebar';
import TranslationsSettingsSidebar from 'containers/TranslationsSettingsSidebar';

import {
  getMinZoomFromTileConfigId,
  getMaxZoomFromTileConfigId
} from 'helpers/map'; // To remove

const StyledCanvas = styled(Section)`
  background-color: #ccc;
`;

class App extends React.Component {
  componentWillMount() {
    const tileConfigId = 'osmFr'; // To remove
    this.props.setMapTileConfigId(tileConfigId); // To remove
    this.props.setMapMinZoom(getMinZoomFromTileConfigId(tileConfigId)); // To remove
    this.props.setMapMaxZoom(getMaxZoomFromTileConfigId(tileConfigId)); // To remove
  }

  render() {
    return (
      <Router>
        <WhiteTheme>
          <StyledCanvas appCanvas>
            <Switch>
              <Route path="/t/:fragment/:title?" component={Theme} />
            </Switch>

            <Route
              exact
              path="/t/:fragment/:title?/data-layers"
              component={DataLayersSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/map-backgrounds"
              component={MapBackgroundsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/user"
              component={UserSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/share"
              component={ShareSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/edition"
              component={EditionSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings"
              component={SettingsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/data-layers"
              component={DataLayersSettingsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/map-backgrounds"
              component={MapBackgroundsSettingsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/custom-tags"
              component={CustomTagsSettingsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/presets"
              component={PresetsSettingsSidebar}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/translations"
              component={TranslationsSettingsSidebar}
            />
          </StyledCanvas>
        </WhiteTheme>
      </Router>
    );
  }
}

App.propTypes = {
  setMapTileConfigId: PropTypes.func.isRequired,
  setMapMinZoom: PropTypes.func.isRequired,
  setMapMaxZoom: PropTypes.func.isRequired
};

App.defaultProps = {
  setMapTileConfigId: () => {},
  setMapMinZoom: () => {},
  setMapMaxZoom: () => {}
};

export default App;
