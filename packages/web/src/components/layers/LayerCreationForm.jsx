import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Button } from 'osm-ui-react';

import { sourceTypes } from 'const/layers';

const StyledDiv = styled.div`
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

    if (isReady) this.props.createLayer(this.state);
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
      <StyledDiv>
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
      </StyledDiv>
    );
  }
}

LayerCreationForm.propTypes = {
  createLayer: PropTypes.func.isRequired
};

LayerCreationForm.defaultProps = {};

LayerCreationForm.displayName = 'LayerCreationForm';

export default LayerCreationForm;
