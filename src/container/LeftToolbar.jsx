import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    increaseMapZoom,
    decreaseMapZoom,
} from '../action/map';

import Toolbar from '../component/LeftToolbar';


class LeftToolbar extends React.PureComponent {
    _handleIncreaseMapZoom() {
        this.props.increaseMapZoom();
    }

    _handleDecreaseMapZoom() {
        this.props.decreaseMapZoom();
    }

    render() {
        const { match, history, zoom } = this.props;

        return (
            <Toolbar
                zoom={zoom}
                onClickIncreaseZoom={() => this._handleIncreaseMapZoom()}
                onClickDecreaseZoom={() => this._handleDecreaseMapZoom()}
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
    increaseMapZoom: zoom => dispatch(increaseMapZoom(zoom)),
    decreaseMapZoom: zoom => dispatch(decreaseMapZoom(zoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftToolbar);
