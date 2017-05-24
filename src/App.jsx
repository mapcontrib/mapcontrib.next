import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { DefaultTheme, AppCanvas } from 'osm-ui-react';

import Theme from './container/Theme';
import DisplayColumn from './container/DisplayColumn';
import UserColumn from './container/UserColumn';
import ShareColumn from './container/ShareColumn';
import EditionColumn from './container/EditionColumn';
import SettingsColumn from './container/SettingsColumn';


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

                        <Route exact path="/t/:fragment/:title?/display" component={DisplayColumn} />
                        <Route exact path="/t/:fragment/:title?/user" component={UserColumn} />
                        <Route exact path="/t/:fragment/:title?/share" component={ShareColumn} />
                        <Route exact path="/t/:fragment/:title?/edition" component={EditionColumn} />
                        <Route exact path="/t/:fragment/:title?/settings" component={SettingsColumn} />
                    </StyledCanvas>
                </DefaultTheme>
            </Router>
        );
    }
}

export default App;
