import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../component/RightToolbar';

const RightToolbar = ({ match, history }) => (
  <Toolbar
    onClickUser={() => history.push(`${match.url}/user`)}
    onClickShare={() => history.push(`${match.url}/share`)}
    onClickEdition={() => history.push(`${match.url}/edition`)}
    onClickSettings={() => history.push(`${match.url}/settings`)}
    onClickDataLayers={() => history.push(`${match.url}/settings/data-layers`)}
    onClickMapBackgrounds={() =>
      history.push(`${match.url}/settings/map-backgrounds`)}
    onClickCustomTags={() => history.push(`${match.url}/settings/custom-tags`)}
    onClickPresets={() => history.push(`${match.url}/settings/presets`)}
    onClickTranslations={() =>
      history.push(`${match.url}/settings/translations`)}
  />
);

RightToolbar.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

RightToolbar.defaultProps = {};

export default RightToolbar;
