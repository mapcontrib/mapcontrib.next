import React from 'react';
import PropTypes from 'prop-types';
import { RedTheme, Sidebar } from 'osm-ui-react';

import { sourceTypes } from 'const/layers';
import OsmoseEditionForm from 'containers/edition/OsmoseEditionForm';

class LayerEditionSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { layer, history, match } = this.props;

    if (!layer) return null;

    let specificForm;

    switch (layer.type) {
      case sourceTypes.OSMOSE:
        specificForm = <OsmoseEditionForm layer={layer} />;
        break;

      default:
        specificForm = <div>TODO</div>;
    }

    return (
      <RedTheme>
        <Sidebar
          opened={!!match}
          position="right"
          title="Edit layer"
          onClickClose={history.goBack}
          {...this.props}
        >
          <div>{layer.name}</div>
          <div>{layer.type}</div>
          {specificForm}
        </Sidebar>
      </RedTheme>
    );
  }
}

LayerEditionSidebar.propTypes = {
  layer: PropTypes.object,
  history: PropTypes.object.isRequired,
  removeLayerById: PropTypes.func.isRequired
};

LayerEditionSidebar.defaultProps = {
  layer: {}
};

LayerEditionSidebar.displayName = 'LayerEditionSidebar';

export default LayerEditionSidebar;
