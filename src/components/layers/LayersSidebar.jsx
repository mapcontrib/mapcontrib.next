import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { RedTheme, DefaultTheme, Sidebar, List } from 'osm-ui-react';

import LayerCreationForm from 'components/layers/LayerCreationForm';

const StyledDiv = styled.div`
  .layers {
    padding: 0;
    margin: 0;
    margin-bottom: 5rem;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

class LayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false
    };

    this.toggleCreationMode = this.toggleCreationMode.bind(this);
    this.createLayer = this.createLayer.bind(this);
  }

  toggleCreationMode() {
    this.setState({
      isCreating: !this.state.isCreating
    });
  }

  goToLayer(id) {
    const { history, match } = this.props;

    const newPath = `${match && match.url}/${id}`;
    history.push(newPath);
  }

  createLayer(layer) {
    const id = shortid.generate();

    this.props.addLayer({
      ...layer,
      id
    });

    this.toggleCreationMode();
    this.goToLayer(id);
  }

  render() {
    const { history, match, themePath, layers, ...props } = this.props;

    const layerItems = layers.map(layer => (
      <List.Item key={layer.id} onClick={() => this.goToLayer(layer.id)}>
        <div>{layer.name}</div>
        <div>{layer.type}</div>
      </List.Item>
    ));

    return (
      <StyledDiv>
        <RedTheme>
          <Sidebar
            opened={!!match}
            position="right"
            title="Layers"
            onClickClose={() => history.replace(themePath)}
            {...props}
          >
            <DefaultTheme>
              <List className="layers">{layerItems}</List>
            </DefaultTheme>
            <Sidebar.Nav>
              <ul>
                {/* <li>
                  <Link to="">Add a missing point</Link>
                </li> */}
                <li>
                  <a onClick={this.toggleCreationMode}>Add a data layer</a>
                  {this.state.isCreating && (
                    <LayerCreationForm createLayer={this.createLayer} />
                  )}
                </li>
              </ul>
            </Sidebar.Nav>
          </Sidebar>
        </RedTheme>
      </StyledDiv>
    );
  }
}

LayerSidebar.propTypes = {
  layers: PropTypes.array,
  addLayer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
  themePath: PropTypes.string.isRequired
};

LayerSidebar.defaultProps = {
  layers: []
};

LayerSidebar.displayName = 'LayerSidebar';

export default LayerSidebar;
