import React from 'react';
import PropTypes from 'prop-types';
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


const LeftToolbar = ({
    zoom,
    onIncreaseZoom,
    onDecreaseZoom,
    ...props
}) => (
    <DefaultTheme>
        <StyledToolbar opened position="top-left">
            <Toolbar.Group>
                <Toolbar.Item icon="plus" onClick={() => onIncreaseZoom()} />
                <Toolbar.Item icon="minus" onClick={() => onDecreaseZoom()} />
                <Toolbar.Item inactive>{zoom}</Toolbar.Item>
            </Toolbar.Group>

            <Toolbar.Item icon="location-arrow" />
            <Toolbar.Item icon="search" />
            <Toolbar.Item icon="map-o" />
        </StyledToolbar>
    </DefaultTheme>
);


LeftToolbar.propTypes = {
    zoom: PropTypes.number.isRequired,
    onIncreaseZoom: PropTypes.func.isRequired,
    onDecreaseZoom: PropTypes.func.isRequired,
};

LeftToolbar.defaultProps = {
};

export default LeftToolbar;
