import { Section, WhiteTheme } from 'osm-ui-react';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import { setMapMaxZoom, setMapMinZoom, setMapTileConfigId } from 'actions/map'; // FIXME - To remove
import { setFragment } from 'actions/theme';
import LayerRoutes from 'components/layers/LayerRoutes';
import MainRoutes from 'components/main/MainRoutes';
import PointRoutes from 'components/points/PointRoutes';
import SettingsRoutes from 'components/settings/SettingsRoutes';
import ShareRoutes from 'components/share/ShareRoutes';
import Theme from 'components/Theme';
import UserRoutes from 'components/user/UserRoutes';
import {
  getMaxZoomFromTileConfigId,
  getMinZoomFromTileConfigId,
} from 'helpers/map'; // FIXME - To remove

const StyledCanvas = styled(Section)`
  background-color: #ccc;
`;

interface IProps {
  themePath: string;
  themeTitle: string;
  setFragment: typeof setFragment;
  setMapMaxZoom: typeof setMapMaxZoom;
  setMapMinZoom: typeof setMapMinZoom;
  setMapTileConfigId: typeof setMapTileConfigId;
}

class App extends React.Component<IProps> {
  public componentWillMount() {
    const tileConfigId = 'osmFr'; // FIXME - To remove
    this.props.setMapTileConfigId(tileConfigId); // FIXME - To remove
    this.props.setMapMinZoom(getMinZoomFromTileConfigId(tileConfigId)); // FIXME - To remove
    this.props.setMapMaxZoom(getMaxZoomFromTileConfigId(tileConfigId)); // FIXME - To remove
  }

  public render() {
    const { themePath, themeTitle } = this.props;

    return (
      <Router>
        <WhiteTheme>
          <StyledCanvas appCanvas={true}>
            <Switch>
              <Route path="/t/:fragment/:title?" render={this.renderTheme} />
              <Route
                path="/"
                render={this.renderRdirect}
              />
            </Switch>
            <SettingsRoutes themePath={themePath} themeTitle={themeTitle} />
            <MainRoutes themePath={themePath} themeTitle={themeTitle} />
            <UserRoutes themePath={themePath} />
            <ShareRoutes themePath={themePath} />
            <LayerRoutes themePath={themePath} />
            <PointRoutes themePath={themePath} />
          </StyledCanvas>
        </WhiteTheme>
      </Router>
    );
  }

  private renderTheme(props: RouteComponentProps<any>) {
    return <Theme themePath={this.props.themePath} setFragment={this.props.setFragment} {...props} />;
  }

  private renderRdirect() {
    return <Redirect to="/t/cl7syt/MapContrib" />;
  }
}

export default App;
