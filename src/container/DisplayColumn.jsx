import React from 'react';
import { connect } from 'react-redux';
import DisplayColumnComponent from '../component/DisplayColumn';


class DisplayColumn extends React.Component {
    render() {
        const { history, themePath } = this.props;

        return (
            <DisplayColumnComponent
                onClickClose={() => {history.replace(themePath)}}
            />
        );
    }
}


DisplayColumn.propTypes = {
};

DisplayColumn.defaultProps = {
};

const mapStateToProps = state => ({
    themePath: state.theme.path,
});

export default connect(mapStateToProps)(DisplayColumn);
