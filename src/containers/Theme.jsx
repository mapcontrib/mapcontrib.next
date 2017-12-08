import React from 'react';
import { connect } from 'react-redux';

import { setFragment } from 'actions/theme';

import Map from 'containers/Map';
import Title from 'containers/Title';
import LeftToolbar from 'containers/LeftToolbar';
import RightToolbar from 'containers/RightToolbar';

class Theme extends React.Component {
  componentWillMount() {
    const { fragment } = this.props.match.params;

    this.props.setFragment(fragment);
  }

  render() {
    const { match, history, themeTitle, themePath } = this.props;

    return (
      <div>
        <Map />
        <Title title={themeTitle} />
        <LeftToolbar match={match} history={history} themePath={themePath} />
        <RightToolbar match={match} history={history} themePath={themePath} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themeTitle: state.theme.title,
  themePath: state.theme.path
});

const mapDispatchToProps = dispatch => ({
  setFragment: fragment => dispatch(setFragment(fragment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
