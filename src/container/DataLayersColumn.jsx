import React from 'react';
import { connect } from 'react-redux';
import DataLayersColumnComponent from '../component/DataLayersColumn';

class DataLayersColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <DataLayersColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

DataLayersColumn.propTypes = {};

DataLayersColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(DataLayersColumn);
