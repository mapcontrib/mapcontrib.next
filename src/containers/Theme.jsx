import React from 'react';
import { connect } from 'react-redux';

import { setFragment } from 'actions/theme';

import ThemeComponent from 'components/Theme';

class Theme extends React.Component {
  componentWillMount() {
    const { fragment } = this.props.match.params;

    this.props.setFragment(fragment);
  }

  render() {
    const { match, history, themePath } = this.props;

    return (
      <ThemeComponent match={match} history={history} themePath={themePath} />
    );
  }
}

const mapStateToProps = state => ({
  themePath: state.theme.path
});

const mapDispatchToProps = dispatch => ({
  setFragment: fragment => dispatch(setFragment(fragment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
