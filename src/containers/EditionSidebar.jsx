import React from 'react';
import { connect } from 'react-redux';
import EditionSidebarComponent from 'components/EditionSidebar';

class EditionSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <EditionSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

EditionSidebar.propTypes = {};

EditionSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(EditionSidebar);
