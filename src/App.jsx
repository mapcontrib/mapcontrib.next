import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { WhiteTheme, AppCanvas } from 'osm-ui-react';

import Theme from './container/Theme';
import DisplayColumn from './container/DisplayColumn';
import UserColumn from './container/UserColumn';
import ShareColumn from './container/ShareColumn';
import EditionColumn from './container/EditionColumn';
import SettingsColumn from './container/SettingsColumn';

import {
    setMapTileConfigId,
    setMapMinZoom,
    setMapMaxZoom,
} from './action/map'; // To remove
import {
    getMinZoomFromTileConfigId,
    getMaxZoomFromTileConfigId,
} from './helper/map'; // To remove


const StyledCanvas = styled(AppCanvas)`
    background-color: #ccc;
`;


class App extends React.Component {
    componentWillMount() {
        const tileConfigId = 'osmFr'; // To remove
        this.props.setMapTileConfigId(tileConfigId); // To remove
        this.props.setMapMinZoom(getMinZoomFromTileConfigId(tileConfigId)); // To remove
        this.props.setMapMaxZoom(getMaxZoomFromTileConfigId(tileConfigId)); // To remove
    }

    render() {
        return (
            <Router>
                <WhiteTheme>
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
                </WhiteTheme>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    setMapTileConfigId: configId => dispatch(setMapTileConfigId(configId)), // To remove
    setMapMinZoom: zoom => dispatch(setMapMinZoom(zoom)), // To remove
    setMapMaxZoom: zoom => dispatch(setMapMaxZoom(zoom)), // To remove
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
