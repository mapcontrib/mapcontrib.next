import React from 'react';
import { connect } from 'react-redux';
import DataLayersSettingsColumnComponent from '../component/DataLayersSettingsColumn';

class DataLayersSettingsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <DataLayersSettingsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

DataLayersSettingsColumn.propTypes = {};

DataLayersSettingsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(DataLayersSettingsColumn);
