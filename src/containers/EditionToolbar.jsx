import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from 'components/EditionToolbar';

const EditionToolbar = ({ match, history }) => (
  <Toolbar
    onClickEdition={() => history.push(`${match.url}/edition`)}
    onClickSettings={() => history.push(`${match.url}/settings`)}
    onClickDataLayers={() => history.push(`${match.url}/settings/data-layers`)}
    onClickMapBackgrounds={() =>
      history.push(`${match.url}/settings/map-backgrounds`)
    }
    onClickCustomTags={() => history.push(`${match.url}/settings/custom-tags`)}
    onClickPresets={() => history.push(`${match.url}/settings/presets`)}
    onClickTranslations={() =>
      history.push(`${match.url}/settings/translations`)
    }
  />
);

EditionToolbar.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

EditionToolbar.defaultProps = {};

export default EditionToolbar;
