import React, { Component } from 'react';
import styled from 'styled-components';
import {
    DefaultTheme,
    AppCanvas,
} from 'osm-ui-react';
import Title from './component/Title';
import LeftToolbar from './component/LeftToolbar';
import RightToolbar from './component/RightToolbar';


const StyledCanvas = styled(AppCanvas)`
    background-color: #ccc;
`;


class App extends Component {
    render() {
        return (
            <div>
                <DefaultTheme>
                    <StyledCanvas>
                        <Title title="MapContrib" />
                        <LeftToolbar />
                        <RightToolbar />
                    </StyledCanvas>
                </DefaultTheme>
            </div>
        );
    }
}

export default App;
