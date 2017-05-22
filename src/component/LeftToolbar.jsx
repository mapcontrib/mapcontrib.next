import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
      DefaultTheme,
      Toolbar,
} from 'osm-ui-react';
import {
    increaseZoom,
    decreaseZoom,
} from '../action/map';


const StyledToolbar = styled(Toolbar)`
    && {
        top: 50px;
    }
`;


class Title extends React.PureComponent {
    _handleIncreaseZoom() {
        this.props.dispatch(increaseZoom());
    }

    _handleDecreaseZoom() {
        this.props.dispatch(decreaseZoom());
    }

    render() {
        const { zoom } = this.props;

        return (
            <DefaultTheme>
                <StyledToolbar opened position="top-left">
                    <Toolbar.Group>
                        <Toolbar.Item icon="plus" onClick={() => this._handleIncreaseZoom()} />
                        <Toolbar.Item icon="minus" onClick={() => this._handleDecreaseZoom()} />
                        <Toolbar.Item inactive>{zoom}</Toolbar.Item>
                    </Toolbar.Group>

                    <Toolbar.Item icon="location-arrow" />
                    <Toolbar.Item icon="search" />
                    <Toolbar.Item icon="map-o" />
                </StyledToolbar>
            </DefaultTheme>
        );
    }
}


Title.propTypes = {
};

Title.defaultProps = {
};

const mapStateToProps = (state, props) => ({
    zoom: state.map.zoom,
});

export default connect(mapStateToProps)(Title);
