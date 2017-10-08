import React from 'react';
import { connect } from 'react-redux';
import ShareColumnComponent from '../component/ShareColumn';

class ShareColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <ShareColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

ShareColumn.propTypes = {};

ShareColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(ShareColumn);
