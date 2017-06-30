import React from 'react';
import { connect } from 'react-redux';
import CustomTagsSettingsColumnComponent from '../component/CustomTagsSettingsColumn';

class CustomTagsSettingsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <CustomTagsSettingsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

CustomTagsSettingsColumn.propTypes = {};

CustomTagsSettingsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(CustomTagsSettingsColumn);
