import React from 'react';
import { connect } from 'react-redux';
import ShareSidebarComponent from '../component/ShareSidebar';

class ShareSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <ShareSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

ShareSidebar.propTypes = {};

ShareSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(ShareSidebar);
