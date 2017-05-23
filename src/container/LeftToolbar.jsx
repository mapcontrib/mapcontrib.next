import React from 'react';
import PropTypes from 'prop-types';
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
        const { match, history, zoom } = this.props;

        return (
            <Toolbar
                zoom={zoom}
                onClickIncreaseZoom={() => this._handleIncreaseZoom()}
                onClickDecreaseZoom={() => this._handleDecreaseZoom()}
                onClickDisplay={() => history.replace(`${match.url}/display`)}
            />
        );
    }
}


LeftToolbar.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
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
