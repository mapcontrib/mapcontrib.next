import React from 'react';
import { Fragment } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import MainSidebar from 'components/main/MainSidebar';

export interface IProps {
  themePath: string;
  themeTitle: string;
}

class MainRoutes extends React.PureComponent<IProps> {
  public render() {
    return (
      <Fragment>
        <Route
          exact={true}
          path="/t/:fragment/:title?/menu"
          children={this.renderMainSidebar}
        />
      </Fragment>
    );
  }

  private renderMainSidebar({ ...props }: RouteComponentProps<any>) {
    return <MainSidebar {...{ ...props, ...this.props }} />;
  }
}

export default MainRoutes;
