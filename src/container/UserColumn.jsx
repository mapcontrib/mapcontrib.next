import React from 'react';
import { connect } from 'react-redux';
import UserColumnComponent from '../component/UserColumn';


class UserColumn extends React.Component {
    render() {
        const { history, themePath } = this.props;

        return (
            <UserColumnComponent
                onClickClose={() => {history.replace(themePath)}}
            />
        );
    }
}

UserColumn.propTypes = {
};

UserColumn.defaultProps = {
};

const mapStateToProps = state => ({
    themePath: state.theme.path,
});

export default connect(mapStateToProps)(UserColumn);
