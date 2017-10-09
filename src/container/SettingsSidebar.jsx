import React from 'react';
import { connect } from 'react-redux';
import SettingsSidebarComponent from '../component/SettingsSidebar';

class SettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <SettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

SettingsSidebar.propTypes = {};

SettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(SettingsSidebar);
