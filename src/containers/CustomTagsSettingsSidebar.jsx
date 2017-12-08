import React from 'react';
import { connect } from 'react-redux';
import CustomTagsSettingsSidebarComponent from 'components/CustomTagsSettingsSidebar';

class CustomTagsSettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <CustomTagsSettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

CustomTagsSettingsSidebar.propTypes = {};

CustomTagsSettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(CustomTagsSettingsSidebar);
