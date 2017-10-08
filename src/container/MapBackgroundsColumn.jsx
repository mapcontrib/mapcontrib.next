import React from 'react';
import { connect } from 'react-redux';
import MapBackgroundsColumnComponent from '../component/MapBackgroundsColumn';

class MapBackgroundsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <MapBackgroundsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

MapBackgroundsColumn.propTypes = {};

MapBackgroundsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(MapBackgroundsColumn);
