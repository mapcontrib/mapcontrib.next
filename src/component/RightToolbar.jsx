import React from 'react';
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


const Title = (props) => (
    <BlueTheme>
        <StyledToolbar opened position="top-right">
            <RedTheme>
                <Toolbar.Item icon="pencil" />
            </RedTheme>
            <BlueTheme>
                <Toolbar.Item icon="user" />
            </BlueTheme>
            <GreenTheme>
                <Toolbar.Item icon="share-alt" />
            </GreenTheme>
            <OrangeTheme>
                <Toolbar.Item icon="sliders" />
            </OrangeTheme>
        </StyledToolbar>
    </BlueTheme>
);


Title.propTypes = {
};


Title.defaultProps = {
};

export default Title;
