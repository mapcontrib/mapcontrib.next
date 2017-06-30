import React from 'react';
import { connect } from 'react-redux';
import SettingsColumnComponent from '../component/SettingsColumn';

class SettingsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <SettingsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

SettingsColumn.propTypes = {};

SettingsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(SettingsColumn);
