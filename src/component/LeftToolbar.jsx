import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
      TurquoiseTheme,
      Toolbar,
} from 'osm-ui-react';



const StyledToolbar = styled(Toolbar)`
    && {
        top: 40px;
    }
`;


const LeftToolbar = ({
    zoom,
    onClickIncreaseZoom,
    onClickDecreaseZoom,
    onClickDisplay,
    ...props
}) => (
    <TurquoiseTheme>
        <StyledToolbar opened position="top-left">
            <Toolbar.Group>
                <Toolbar.Item icon="plus" onClick={() => onClickIncreaseZoom()} />
                <Toolbar.Item icon="minus" onClick={() => onClickDecreaseZoom()} />
                <Toolbar.Item inactive>{zoom}</Toolbar.Item>
            </Toolbar.Group>

            <Toolbar.Item icon="location-arrow" />
            <Toolbar.Item icon="search" />
            <Toolbar.Item icon="map-o" onClick={() => onClickDisplay()} />
        </StyledToolbar>
    </TurquoiseTheme>
);


LeftToolbar.propTypes = {
    zoom: PropTypes.number.isRequired,
    onClickIncreaseZoom: PropTypes.func.isRequired,
    onClickDecreaseZoom: PropTypes.func.isRequired,
    onClickDisplay: PropTypes.func.isRequired,
};

LeftToolbar.defaultProps = {
};

export default LeftToolbar;
