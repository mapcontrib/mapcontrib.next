import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Sidebar, Osmose } from 'osm-ui-react';

import { osmose } from 'helpers/requests';

class OsmoseSidebar extends React.Component {
  state = {
    error: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.match !== null) {
      osmose
        .fetchError(nextProps.match.params.id)
        .then(error => this.setState({ error }));
    }
  }

  render() {
    const { error } = this.state;
    const { history, match, themePath } = this.props;

    return (
      <WhiteTheme>
        <Sidebar
          opened={!!match}
          loading={error ? false : true}
          position="right"
          title="Osmose"
          onClickClose={() => {
            history.replace(themePath);
          }}
          {...this.props}
        >
          {error ? <Osmose data={error} handleSuggestion={() => {}} /> : ''}
        </Sidebar>
      </WhiteTheme>
    );
  }
}

OsmoseSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  themePath: PropTypes.string.isRequired
};

OsmoseSidebar.defaultProps = {};

export default OsmoseSidebar;
