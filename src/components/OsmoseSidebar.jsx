import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Sidebar, Osmose, Loader } from 'osm-ui-react';

import { osmose } from 'helpers/requests';

class OsmoseSidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null
    };
  }

  componentDidMount() {
    osmose
      .fetchError(this.props.match.params.id)
      .then(error => this.setState({ error }));
  }

  componentWillReceiveProps(nextProps) {
    osmose
      .fetchError(nextProps.match.params.id)
      .then(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;
    const { history, themePath } = this.props;

    const child = error ? (
      <Osmose data={error} />
    ) : (
      <Loader centered spinnerSize={60} strokeSize={4} />
    );

    return (
      <WhiteTheme>
        <Sidebar
          opened
          position="right"
          title="Osmose"
          onClickClose={() => {
            history.replace(themePath);
          }}
          {...this.props}
        >
          {child}
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
