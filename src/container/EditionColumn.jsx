import React from 'react';
import { connect } from 'react-redux';
import EditionColumnComponent from '../component/EditionColumn';

class EditionColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <EditionColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

EditionColumn.propTypes = {};

EditionColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(EditionColumn);
