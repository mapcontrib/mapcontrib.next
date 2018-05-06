import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RedTheme, Sidebar, Form, Button } from 'osm-ui-react';

const StyledDiv = styled.div`
  ${Form.Input.style} {
    margin-bottom: 2rem;
  }
`;

class OverpassLayerSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      query: ''
    };
  }

  addLayer = () => {
    const { name, query } = this.state;

    if (name.length > 0 && query.length > 0)
      this.props.addOverpassLayer(name, query);
  };

  handleChange = (field, value) =>
    this.setState({
      [field]: value
    });

  render() {
    const { name, query } = this.state;
    const { history, match, themePath } = this.props;

    return (
      <RedTheme>
        <StyledDiv>
          <Sidebar
            opened={!!match}
            position="right"
            title="Overpass layer"
            onClickClose={() => history.replace(themePath)}
            {...this.props}
          >
            <Form.Group>
              <Form.Label htmlFor="name">Layer name</Form.Label>
              <Form.Input
                id="name"
                placeholder="Enter new layer name..."
                autoFocus={false}
                labelKey="name"
                valueKey="id"
                onChange={e => this.handleChange('name', e.target.value)}
                value={name}
              />
              <Form.Label htmlFor="query">Overpass query</Form.Label>
              <Form.Textarea
                id="query"
                placeholder="Enter overpass query..."
                autoFocus={false}
                labelKey="query"
                valueKey="id"
                onChange={e => this.handleChange('query', e.target.value)}
                value={query}
              />
            </Form.Group>
            <Button onClick={this.addLayer}>Add Layer</Button>
          </Sidebar>
        </StyledDiv>
      </RedTheme>
    );
  }
}

OverpassLayerSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired,
  addOverpassLayer: PropTypes.func.isRequired
};

OverpassLayerSidebar.defaultProps = {};

OverpassLayerSidebar.displayName = 'OverpassLayerSidebar';

export default OverpassLayerSidebar;
