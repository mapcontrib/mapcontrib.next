import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { DefaultTheme, AppCanvas } from 'osm-ui-react';

import Theme from './container/Theme';
import DisplayColumn from './container/DisplayColumn';


const StyledCanvas = styled(AppCanvas)`
    background-color: #ccc;
`;


class App extends React.Component {
    render() {
        return (
            <Router>
                <DefaultTheme>
                    <StyledCanvas>
                        <Switch>
                            <Route path="/t/:fragment/:title?" component={Theme} />
                        </Switch>

                        <Route path="/t/:fragment/:title?/display" component={DisplayColumn} />
                    </StyledCanvas>
                </DefaultTheme>
            </Router>
        );
    }
}

export default App;
