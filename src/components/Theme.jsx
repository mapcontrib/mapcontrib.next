import React from 'react';
import styled from 'styled-components';

import Map from 'containers/Map';
import MainToolbar from 'containers/MainToolbar';
import UserToolbar from 'containers/UserToolbar';
import EditionToolbar from 'containers/EditionToolbar';

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

const Theme = ({ match, history, themePath, ...props }) => (
  <div {...props}>
    <Map match={match} history={history} themePath={themePath} />
    <MainToolbar match={match} history={history} themePath={themePath} />
    <UserToolbar match={match} history={history} themePath={themePath} />
    <EditionToolbar match={match} history={history} themePath={themePath} />
    <TopBorder />
  </div>
);

Theme.propTypes = {};

Theme.defaultProps = {};

export default Theme;
