import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RedTheme, Sidebar, Button } from 'osm-ui-react';

import { sourceTypes } from 'const/layers';

import OsmoseItemsForm from 'containers/layers/OsmoseItemsForm';
import OverpassQueryForm from 'containers/layers/OverpassQueryForm';

const StyledDiv = styled.div`
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      h1 {
        font-size: 3rem;
        margin: 0;
      }
    }
  }

  .remove-btn {
    width: 100%;
  }
`;

class LayerEditionSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { layer, removeLayer, history, match } = this.props;

    if (!layer) return null;

    let specificForm;

    switch (layer.type) {
      case sourceTypes.OSMOSE:
        specificForm = <OsmoseItemsForm layer={layer} />;
        break;

      case sourceTypes.OVERPASS:
        specificForm = <OverpassQueryForm layer={layer} />;
        break;

      default:
        specificForm = <div>TODO</div>;
    }

    return (
      <RedTheme>
        <StyledDiv>
          <Sidebar
            opened={!!match}
            position="right"
            title="Edit layer"
            onClickClose={history.goBack}
            {...this.props}
          >
            <div>
              <div className="header">
                <h1>{layer.name}</h1>
                <div>{layer.type}</div>
              </div>
              {specificForm}
            </div>
            <div className="footer">
              <Button
                className="remove-btn"
                size="lg"
                shape="square"
                onClick={removeLayer}
              >
                Remove Layer
              </Button>
            </div>
          </Sidebar>
        </StyledDiv>
      </RedTheme>
    );
  }
}

LayerEditionSidebar.propTypes = {
  layer: PropTypes.object,
  history: PropTypes.object.isRequired,
  removeLayer: PropTypes.func.isRequired
};

LayerEditionSidebar.defaultProps = {
  layer: {}
};

LayerEditionSidebar.displayName = 'LayerEditionSidebar';

export default LayerEditionSidebar;
