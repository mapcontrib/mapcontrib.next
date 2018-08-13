import { Sidebar, WhiteTheme } from 'osm-ui-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

export interface IProps extends RouteComponentProps<any> {
  themePath: string;
  themeTitle: string;
}


class MainSidebar extends React.PureComponent<IProps> {
  public render() {
    const { match, themePath, themeTitle, ...props } = this.props;

    return (
      <WhiteTheme>
        <Sidebar
          opened={!!match}
          position="left"
          {...props}
        >
          <Sidebar.Title>{themeTitle}</Sidebar.Title>
          <Sidebar.Nav>
            <ul>
              <li>
                <Link to="">Search me</Link>
              </li>
              <li>
                <Link to="">Search address</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">Data layers</Link>
              </li>
              <li>
                <Link to="">Tiles</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">Report a bug</Link>
              </li>
              <li>
                <Link to="">Contact the team</Link>
              </li>
              <li>
                <Link to="">Project's blog</Link>
              </li>
              <li>
                <Link to="">Wiki</Link>
              </li>
              <li>
                <Link to="">About MapContrib</Link>
              </li>
            </ul>
          </Sidebar.Nav>
        </Sidebar>
      </WhiteTheme>
    );
  }
}

export default MainSidebar;
