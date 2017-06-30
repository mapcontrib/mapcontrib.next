import React from 'react';
import { connect } from 'react-redux';
import TranslationsSettingsColumnComponent from '../component/TranslationsSettingsColumn';

class TranslationsSettingsColumn extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <TranslationsSettingsColumnComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

TranslationsSettingsColumn.propTypes = {};

TranslationsSettingsColumn.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(TranslationsSettingsColumn);
