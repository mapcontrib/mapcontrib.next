import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { WhiteTheme, Section } from 'osm-ui-react';

import OsmoseLayerSidebar from 'containers/OsmoseLayerSidebar';

import Theme from 'components/Theme';
import MainSidebar from 'components/MainSidebar';
import UserSidebar from 'components/UserSidebar';
import ShareSidebar from 'components/ShareSidebar';
import EditionSidebar from 'components/EditionSidebar';
import SettingsSidebar from 'components/SettingsSidebar';
import OsmoseSidebar from 'components/OsmoseSidebar';
import DataLayersSidebar from 'components/DataLayersSidebar';

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
    const { themePath, themeTitle, setFragment } = this.props;

    return (
      <Router>
        <WhiteTheme>
          <StyledCanvas appCanvas>
            <Switch>
              <Route
                path="/t/:fragment/:title?"
                render={props => (
                  <Theme
                    themePath={themePath}
                    setFragment={setFragment}
                    {...props}
                  />
                )}
              />
            </Switch>
            <Route
              exact
              path="/t/:fragment/:title?/menu"
              render={props => (
                <MainSidebar
                  themePath={themePath}
                  themeTitle={themeTitle}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/user"
              render={props => <UserSidebar themePath={themePath} {...props} />}
            />
            <Route
              exact
              path="/t/:fragment/:title?/share"
              render={props => (
                <ShareSidebar themePath={themePath} {...props} />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/edition"
              render={props => (
                <EditionSidebar themePath={themePath} {...props} />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/settings"
              render={props => (
                <SettingsSidebar themePath={themePath} {...props} />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/temp-data-layers"
              render={props => (
                <DataLayersSidebar themePath={themePath} {...props} />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/osmose-layer"
              render={props => (
                <OsmoseLayerSidebar themePath={themePath} {...props} />
              )}
            />
            <Route
              exact
              path="/t/:fragment/:title?/osmose/:id"
              render={props => (
                <OsmoseSidebar themePath={themePath} {...props} />
              )}
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
  setMapMaxZoom: PropTypes.func.isRequired,
  setFragment: PropTypes.func.isRequired
};

App.defaultProps = {};

App.displayName = 'App';

export default App;
