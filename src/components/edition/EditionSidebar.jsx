import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';
import {
  RedTheme,
  DefaultTheme,
  Sidebar,
  List,
  Form,
  Button
} from 'osm-ui-react';

import { sourceTypes } from 'const/layers';

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

  .creationForm {
    .types {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      > div {
        max-width: 45%;
        flex: 1;
      }

      label {
        margin: 0;
        padding: 0.5rem;
        border: 1px solid white;
        text-align: center;

        &::before,
        &::after {
          display: none;
        }
      }

      input:checked + label {
        background-color: green;
      }
    }

    label {
      display: block;
      margin: 1rem 0;
      padding: 0;
      text-align: left;
    }

    ${Button.style} {
      display: block;
      width: 100%;
      margin: 2rem 0;
    }
  }
`;

class LayerCreationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      type: ''
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    const isReady = this.state.name !== '' && this.state.type !== '';

    if (isReady) {
      this.props.onSubmit(this.state);
      console.log('YES', this.state);
    }
  }

  render() {
    const types = Object.keys(sourceTypes).map(type => (
      <Form.Radio
        name="type"
        label={type}
        id={type}
        value={type}
        key={type}
        checked={type === this.state.type}
        onClick={() => this.setState({ type })}
      />
    ));

    return (
      <Form.Group className="creationForm">
        <Form.Label htmlFor="type">Type</Form.Label>
        <div className="types">{types}</div>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Input
          id="name"
          placeholder="Enter new layer name..."
          autoFocus={false}
          labelKey="name"
          valueKey="id"
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <Button type="submit" size="lg" onClick={this.submit}>
          Create layer
        </Button>
      </Form.Group>
    );
  }
}

class EditSidebar extends React.Component {
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

    const newPath = `${match && match.url}/layer/${id}`;
    history.push(newPath);
  }

  createLayer(layer) {
    const id = shortid.generate();

    this.props.addLayer({
      ...layer,
      id
    });

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
            title="Edition"
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
                    <LayerCreationForm onSubmit={this.createLayer} />
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

EditSidebar.propTypes = {
  layers: PropTypes.array,
  addLayer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
  themePath: PropTypes.string.isRequired
};

EditSidebar.defaultProps = {
  layers: []
};

EditSidebar.displayName = 'EditSidebar';

export default EditSidebar;
