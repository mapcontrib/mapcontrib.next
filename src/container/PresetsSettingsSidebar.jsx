import React from 'react';
import { connect } from 'react-redux';
import PresetsSettingsSidebarComponent from '../component/PresetsSettingsSidebar';

class PresetsSettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <PresetsSettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

PresetsSettingsSidebar.propTypes = {};

PresetsSettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(PresetsSettingsSidebar);
