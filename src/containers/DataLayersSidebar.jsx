import React from 'react';
import { connect } from 'react-redux';
import DataLayersSidebarComponent from 'components/DataLayersSidebar';

class DataLayersSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <DataLayersSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

DataLayersSidebar.propTypes = {};

DataLayersSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(DataLayersSidebar);
