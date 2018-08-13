import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { setFragment } from 'actions/theme';
import LayerToolbar from 'components/LayerToolbar';
// import UserToolbar from 'components/UserToolbar';
import MainToolbar from 'containers/MainToolbar';
import ThemeMap from 'containers/ThemeMap';

const TopBorder = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  transform: translate(0, -16px);
  background-color: #f44336;
  box-shadow: 0 3px 4px -3px rgba(0, 0, 0, 0.2), 0 0 2px -1px rgba(0, 0, 0, 0.2);
`;

export interface IProps extends RouteComponentProps<any> {
  setFragment: typeof setFragment;
  themePath: string;
}

class Theme extends React.Component<IProps> {
  public componentWillMount() {
    const { fragment } = this.props.match.params;

    this.props.setFragment(fragment);
  }

  public render() {
    const { history, location, match, themePath } = this.props;
    const props = { history, location, match, themePath };

    return (
      <div>
        <ThemeMap {...props} />
        <MainToolbar {...props} />
        {/* <UserToolbar {...props} /> */}
        <LayerToolbar {...props} />
        <TopBorder />
      </div>
    );
  }
}

export default Theme;
