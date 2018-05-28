import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Map from 'containers/Map';
import MainToolbar from 'containers/MainToolbar';
// import UserToolbar from 'components/UserToolbar';
import LayerToolbar from 'components/LayerToolbar';

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

class Theme extends React.Component {
  componentWillMount() {
    const { fragment } = this.props.match.params;

    this.props.setFragment(fragment);
  }

  render() {
    const { history, match, themePath } = this.props;

    return (
      <div>
        <Map match={match} history={history} themePath={themePath} />
        <MainToolbar match={match} history={history} themePath={themePath} />
        {/* <UserToolbar match={match} history={history} themePath={themePath} /> */}
        <LayerToolbar match={match} history={history} themePath={themePath} />
        <TopBorder />
      </div>
    );
  }
}

Theme.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired,
  setFragment: PropTypes.func.isRequired
};

Theme.defaultProps = {};

Theme.displayName = 'Theme';

export default Theme;
