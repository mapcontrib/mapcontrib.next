import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    BlueTheme,
    GreenTheme,
    RedTheme,
    OrangeTheme,
    Toolbar,
} from 'osm-ui-react';


const StyledToolbar = styled(Toolbar)`
    && {
        top: 50px;
    }
`;


const RightToolbar = ({
    onClickUser,
    onClickShare,
    onClickEdition,
    onClickSettings,
    ...props,
}) => (
    <BlueTheme>
        <StyledToolbar opened position="top-right">
            <BlueTheme>
                <Toolbar.Item icon="user" onClick={() => onClickUser()} />
            </BlueTheme>
            <GreenTheme>
                <Toolbar.Item icon="share-alt" onClick={() => onClickShare()} />
            </GreenTheme>
            <RedTheme>
                <Toolbar.Item icon="pencil" onClick={() => onClickEdition()} />
            </RedTheme>
            <OrangeTheme>
                <Toolbar.Item icon="sliders" onClick={() => onClickSettings()} />
            </OrangeTheme>
        </StyledToolbar>
    </BlueTheme>
);


RightToolbar.propTypes = {
    onClickUser: PropTypes.func.isRequired,
    onClickShare: PropTypes.func.isRequired,
    onClickEdition: PropTypes.func.isRequired,
    onClickSettings: PropTypes.func.isRequired,
};

RightToolbar.defaultProps = {
};

export default RightToolbar;
