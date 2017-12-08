import React from 'react';
import { connect } from 'react-redux';
import DataLayersSettingsSidebarComponent from 'components/DataLayersSettingsSidebar';

class DataLayersSettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <DataLayersSettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

DataLayersSettingsSidebar.propTypes = {};

DataLayersSettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(DataLayersSettingsSidebar);
