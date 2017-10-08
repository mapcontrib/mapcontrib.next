import React from 'react';
import { connect } from 'react-redux';
import PresetsSettingsColumnComponent from '../component/PresetsSettingsColumn';

class PresetsSettingsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <PresetsSettingsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

PresetsSettingsColumn.propTypes = {};

PresetsSettingsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(PresetsSettingsColumn);
