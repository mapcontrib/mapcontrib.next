import React from 'react';
import { connect } from 'react-redux';
import TranslationsSettingsSidebarComponent from 'components/TranslationsSettingsSidebar';

class TranslationsSettingsSidebar extends React.Component {
  render() {
    const { history, themePath } = this.props;

    return (
      <TranslationsSettingsSidebarComponent
        onClickClose={() => {
          history.replace(themePath);
        }}
      />
    );
  }
}

TranslationsSettingsSidebar.propTypes = {};

TranslationsSettingsSidebar.defaultProps = {};

const mapStateToProps = state => ({
  themePath: state.theme.path
});

export default connect(mapStateToProps)(TranslationsSettingsSidebar);
