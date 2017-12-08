import React from 'react';
import { connect } from 'react-redux';
import UserSidebarComponent from 'components/UserSidebar';

class UserSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <UserSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

UserSidebar.propTypes = {};

UserSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(UserSidebar);
