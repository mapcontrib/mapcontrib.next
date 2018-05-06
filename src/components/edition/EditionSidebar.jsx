import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RedTheme, DefaultTheme, Sidebar, List } from 'osm-ui-react';

const StyledDiv = styled.div`
  li {
    display: flex;
    justify-content: space-between;
  }
`;

const EditSidebar = ({ history, match, themePath, layers, ...props }) => {
  const layerItems = layers.map(layer => (
    <List.Item key={layer.id}>
      <div>{layer.name}</div>
      <div>{layer.type}</div>
    </List.Item>
  ));

  return (
    <RedTheme>
      <Sidebar
        opened={!!match}
        position="right"
        title="Edition"
        onClickClose={() => history.replace(themePath)}
        {...props}
      >
        <DefaultTheme>
          <StyledDiv>
            <List>{layerItems}</List>
          </StyledDiv>
        </DefaultTheme>
        <Sidebar.Nav>
          <ul>
            {/* <li>
              <Link to="">Add a missing point</Link>
            </li> */}
            <li>
              <Link to={`${match && match.url}/temp-layers`}>
                Add a temporary data layer
              </Link>
            </li>
          </ul>
        </Sidebar.Nav>
      </Sidebar>
    </RedTheme>
  );
};

EditSidebar.propTypes = {
  layers: PropTypes.array,
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

EditSidebar.defaultProps = {
  layers: []
};

EditSidebar.displayName = 'EditSidebar';

export default EditSidebar;
