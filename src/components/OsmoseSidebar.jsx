import React from 'react';
import { WhiteTheme, Sidebar, Osmose } from 'osm-ui-react';

import { osmose } from '../helpers/requests';

class OsmoseSidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null
    };
  }

  componentDidMount() {
    osmose.fetchError(this.props.id).then(error => this.setState({ error }));
  }

  componentWillReceiveProps(nextProps) {
    osmose.fetchError(nextProps.id).then(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;
    const { history, themePath } = this.props;

    const osmoseComponent = error && <Osmose data={error} />;

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
          {osmoseComponent}
        </Sidebar>
      </WhiteTheme>
    );
  }
}

OsmoseSidebar.propTypes = {};

OsmoseSidebar.defaultProps = {};

export default OsmoseSidebar;
