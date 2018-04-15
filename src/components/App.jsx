import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { WhiteTheme, Section } from 'osm-ui-react';

import Theme from 'components/Theme';
import SettingsRoutes from 'components/settings/SettingsRoutes';
import MainRoutes from 'components/main/MainRoutes';
import UserRoutes from 'components/user/UserRoutes';
import ShareRoutes from 'components/share/ShareRoutes';
import EditionRoutes from 'components/edition/EditionRoutes';

import {
  getMinZoomFromTileConfigId,
  getMaxZoomFromTileConfigId
} from 'helpers/map'; // FIXME - To remove

const StyledCanvas = styled(Section)`
  background-color: #ccc;
`;

class App extends React.Component {
  componentWillMount() {
    const tileConfigId = 'osmFr'; // FIXME - To remove
    this.props.setMapTileConfigId(tileConfigId); // FIXME - To remove
    this.props.setMapMinZoom(getMinZoomFromTileConfigId(tileConfigId)); // FIXME - To remove
    this.props.setMapMaxZoom(getMaxZoomFromTileConfigId(tileConfigId)); // FIXME - To remove
  }

  render() {
    const { themePath, themeTitle, setFragment } = this.props;

    return (
      <Router>
        <WhiteTheme>
          <StyledCanvas appCanvas>
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
            <SettingsRoutes themePath={themePath} themeTitle={themeTitle} />
            <MainRoutes themePath={themePath} themeTitle={themeTitle} />
            <UserRoutes themePath={themePath} />
            <ShareRoutes themePath={themePath} />
            <EditionRoutes themePath={themePath} />
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
