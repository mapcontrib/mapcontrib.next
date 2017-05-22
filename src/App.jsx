import React from 'react';
import styled from 'styled-components';
import {
    DefaultTheme,
    AppCanvas,
} from 'osm-ui-react';
import Map from './component/Map';
import Title from './component/Title';
import LeftToolbar from './component/LeftToolbar';
import RightToolbar from './component/RightToolbar';


const StyledCanvas = styled(AppCanvas)`
    background-color: #ccc;
`;


class App extends React.Component {
    render() {
        return (
            <div>
                <DefaultTheme>
                    <StyledCanvas>
                        <Map />
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
