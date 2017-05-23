import React from 'react';
import { connect } from 'react-redux';

import { setFragment } from '../action/theme';

import Map from '../container/Map';
import Title from '../container/Title';
import LeftToolbar from '../container/LeftToolbar';
import RightToolbar from '../container/RightToolbar';


class Theme extends React.Component {
    componentWillMount() {
        const { fragment } = this.props.match.params;

        this.props.setFragment(fragment);
    }

    render() {
        return (
            <div>
                <Map />
                <Title title="MapContrib" />
                <LeftToolbar />
                <RightToolbar />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    themeTitle: state.theme.title,
});

const mapDispatchToProps = dispatch => ({
    setFragment: fragment => dispatch(setFragment(fragment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
