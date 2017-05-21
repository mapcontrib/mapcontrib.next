import React from 'react';
import styled from 'styled-components';
import {
      DefaultTheme,
      Toolbar,
} from 'osm-ui-react';


const StyledToolbar = styled(Toolbar)`
    && {
        top: 50px;
    }
`;


const Title = (props) => (
    <DefaultTheme>
        <StyledToolbar opened position="top-left">
            <Toolbar.Group>
                <Toolbar.Item icon="plus" />
                <Toolbar.Item icon="minus" />
                <Toolbar.Item inactive>14</Toolbar.Item>
            </Toolbar.Group>

            <Toolbar.Item icon="location-arrow" />
            <Toolbar.Item icon="search" />
            <Toolbar.Item icon="map-o" />
        </StyledToolbar>
    </DefaultTheme>
);


Title.propTypes = {
};


Title.defaultProps = {
};

export default Title;
