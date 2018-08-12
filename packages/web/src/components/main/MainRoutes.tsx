import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import MainSidebar from 'components/main/MainSidebar';

export interface IProps {
  themePath: string;
  themeTitle: string;
}

const MainRoutes = ({ themePath, themeTitle }: IProps) => (
  <Fragment>
    <Route
      exact={true}
      path="/t/:fragment/:title?/menu"
      children={props => (
        <MainSidebar themePath={themePath} themeTitle={themeTitle} {...props} />
      )}
    />
  </Fragment>
);

export default MainRoutes;
