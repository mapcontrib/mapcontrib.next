import React from 'react';
import { connect } from 'react-redux';
import MainSidebarComponent from 'components/MainSidebar';

class MainSidebar extends React.Component {
  render() {
    const { history, themePath, themeTitle } = this.props;

    return (
      <MainSidebarComponent
        themeTitle={themeTitle}
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

MainSidebar.propTypes = {};

MainSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themeTitle: state.theme.title,
  themePath: state.theme.path
});

export default connect(mapStateToProps)(MainSidebar);
