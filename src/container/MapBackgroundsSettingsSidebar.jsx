import React from 'react';
import { connect } from 'react-redux';
import MapBackgroundsSettingsSidebarComponent from '../component/MapBackgroundsSettingsSidebar';

class MapBackgroundsSettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <MapBackgroundsSettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

MapBackgroundsSettingsSidebar.propTypes = {};

MapBackgroundsSettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(MapBackgroundsSettingsSidebar);
