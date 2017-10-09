import React from 'react';
import { connect } from 'react-redux';
import MapBackgroundsSidebarComponent from '../component/MapBackgroundsSidebar';

class MapBackgroundsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <MapBackgroundsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

MapBackgroundsSidebar.propTypes = {};

MapBackgroundsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(MapBackgroundsSidebar);
