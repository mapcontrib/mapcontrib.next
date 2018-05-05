import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTheme, Sidebar, Osmose } from 'osm-ui-react';

import EditorModal from './EditorModal';
import { osmose, osm } from 'helpers/requests';
import { buildChangesetCreatedBy, buildChangesetComment } from 'helpers/osm';

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
    const original = this.state.error.elems[0];
    const elemId = `${original.type}/${original.id}`;

    const changesetIdP = osm.request.createChangeset(
      buildChangesetCreatedBy(),
      buildChangesetComment(this.props.themePath)
    );
    const elemP = osm.request.fetchElement(elemId);

    Promise.all([changesetIdP, elemP])
      .then(([id, element]) => {
        element = osm.request.setProperties(element, fix);

        return osm.request
          .isChangesetStillOpen(id)
          .then(id => osm.request.sendElement(element, id));
      })
      .then(() => {
        osmose.closeError(errorId);
        this.closeEditor();
        this.props.addSubmitted(errorId);
        this.props.history.replace(this.props.themePath);
      })
      .catch(err => console.log('Error in sending Element', err));
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
  themePath: PropTypes.string.isRequired,
  addSubmitted: PropTypes.func.isRequired
};

OsmoseSidebar.defaultProps = {};

export default OsmoseSidebar;