import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { WhiteTheme, Modal, Editor } from 'osm-ui-react';

// import { osmose } from 'helpers/requests';
// import request from 'osm-request';

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
`;

class EditorModal extends React.Component {
  render() {
    const { original, fixed, submit, close } = this.props;

    return (
      <WhiteTheme>
        <Modal title="Edit">
          <Editor original={original} fixed={fixed} submit={submit} />
          <StyledDiv onClick={close}>
            <FontAwesome name="times" />
          </StyledDiv>
        </Modal>
      </WhiteTheme>
    );
  }
}

EditorModal.propTypes = {
  original: PropTypes.object,
  fixed: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

EditorModal.defaultProps = {
  original: null
};

export default EditorModal;
