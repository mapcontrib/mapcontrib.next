import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Sidebar, Osmose } from 'osm-ui-react';

import EditorModal from './EditorModal';
import { osmose } from 'helpers/requests';

class OsmoseSidebar extends React.Component {
  state = {
    error: null,
    original: null,
    fix: null
  };

  displayEditor = (fix, original) =>
    this.setState({
      original,
      fix
    });

  closeEditor = () =>
    this.setState({
      original: null,
      fix: null
    });

  submitCorrection = fix => {
    const errorId = this.state.error.error_id;
    const elemId = this.state.error.elems_id;

    // 1) request changeset
    console.log('Requesting change for Node:', elemId);
    // 2) send Change
    console.log('Sending fix for Node:', elemId, fix);
    // 3) request changeset
    console.log('Closing error:', errorId);

    this.closeEditor();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.match !== null) {
      osmose
        .fetchError(nextProps.match.params.id)
        .then(error => this.setState({ error }));
    }
  }

  render() {
    const { error, original, fix } = this.state;
    const { history, match, themePath } = this.props;

    console.log('ERROR', error);

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
          {error ? (
            <Osmose data={error} handleSuggestion={this.displayEditor} />
          ) : (
            ''
          )}
        </Sidebar>
        {fix && (
          <EditorModal
            fixed={fix}
            original={original}
            submit={this.submitCorrection}
            close={this.closeEditor}
          />
        )}
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
