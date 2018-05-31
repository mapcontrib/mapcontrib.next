import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Button } from 'osm-ui-react';

const StyledDiv = styled.div`
  button {
    display: block;
    width: 50%;
    margin: 1rem 0;
    margin-left: 50%;
  }
`;

class OverpassQueryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.updateQuery(this.state.query);
  }

  render() {
    return (
      <Fragment>
        <StyledDiv>
          <Form.Label htmlFor="query">Overpass query</Form.Label>
          <Form.Textarea
            id="query"
            placeholder="Enter overpass query..."
            autoFocus={false}
            labelKey="query"
            valueKey="id"
            onChange={e => this.setState({ query: e.target.value })}
            value={this.state.query}
          />
          <Button type="submit" onClick={this.submit}>
            Update query
          </Button>
        </StyledDiv>
      </Fragment>
    );
  }
}

OverpassQueryForm.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func.isRequired
};

OverpassQueryForm.defaultProps = {
  query: ''
};

OverpassQueryForm.displayName = 'OverpassQueryForm';

export default OverpassQueryForm;
