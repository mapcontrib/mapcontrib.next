import React from 'react';
import { connect } from 'react-redux';

import {
    increaseZoom,
    decreaseZoom,
} from '../action/map';

import Toolbar from '../component/LeftToolbar';


class LeftToolbar extends React.PureComponent {
    _handleIncreaseZoom() {
        this.props.increaseZoom();
    }

    _handleDecreaseZoom() {
        this.props.decreaseZoom();
    }

    render() {
        const { zoom } = this.props;

        return (
            <Toolbar
                zoom={zoom}
                onIncreaseZoom={() => this._handleIncreaseZoom()}
                onDecreaseZoom={() => this._handleDecreaseZoom()}
            />
        );
    }
}


LeftToolbar.propTypes = {
};

LeftToolbar.defaultProps = {
};

const mapStateToProps = state => ({
    zoom: state.map.zoom,
});

const mapDispatchToProps = dispatch => ({
    increaseZoom: zoom => dispatch(increaseZoom(zoom)),
    decreaseZoom: zoom => dispatch(decreaseZoom(zoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftToolbar);
