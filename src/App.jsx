import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { WhiteTheme, Section } from 'osm-ui-react';

import Theme from './container/Theme';
import DataLayersColumn from './container/DataLayersColumn';
import MapBackgroundsColumn from './container/MapBackgroundsColumn';
import UserColumn from './container/UserColumn';
import ShareColumn from './container/ShareColumn';
import EditionColumn from './container/EditionColumn';
import SettingsColumn from './container/SettingsColumn';
import DataLayersSettingsColumn from './container/DataLayersSettingsColumn';
import MapBackgroundsSettingsColumn from './container/MapBackgroundsSettingsColumn';
import CustomTagsSettingsColumn from './container/CustomTagsSettingsColumn';
import PresetsSettingsColumn from './container/PresetsSettingsColumn';
import TranslationsSettingsColumn from './container/TranslationsSettingsColumn';

import { setMapTileConfigId, setMapMinZoom, setMapMaxZoom } from './action/map'; // To remove
import {
  getMinZoomFromTileConfigId,
  getMaxZoomFromTileConfigId
} from './helper/map'; // To remove

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
              component={DataLayersColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/map-backgrounds"
              component={MapBackgroundsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/user"
              component={UserColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/share"
              component={ShareColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/edition"
              component={EditionColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings"
              component={SettingsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/data-layers"
              component={DataLayersSettingsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/map-backgrounds"
              component={MapBackgroundsSettingsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/custom-tags"
              component={CustomTagsSettingsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/presets"
              component={PresetsSettingsColumn}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings/translations"
              component={TranslationsSettingsColumn}
            />
          </StyledCanvas>
        </WhiteTheme>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setMapTileConfigId: configId => dispatch(setMapTileConfigId(configId)), // To remove
  setMapMinZoom: zoom => dispatch(setMapMinZoom(zoom)), // To remove
  setMapMaxZoom: zoom => dispatch(setMapMaxZoom(zoom)) // To remove
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
