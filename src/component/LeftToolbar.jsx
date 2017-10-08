import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WhiteTheme, Toolbar } from 'osm-ui-react';

const StyledToolbar = styled(Toolbar)`
    && {
        top: 40px;
    }
`;

const LeftToolbar = ({
  zoom,
  onClickIncreaseZoom,
  onClickDecreaseZoom,
  onClickDataLayers,
  onClickMapBackgrounds,
  ...props
}) =>
  <WhiteTheme>
    <StyledToolbar opened position="left-top" {...props}>
      <Toolbar.Group>
        <Toolbar.Item icon="plus" onClick={() => onClickIncreaseZoom()} />
        <Toolbar.Item icon="minus" onClick={() => onClickDecreaseZoom()} />
        <Toolbar.Item inactive>
          {zoom}
        </Toolbar.Item>
      </Toolbar.Group>

      <Toolbar.Group>
        <Toolbar.Item icon="location-arrow" />
        <Toolbar.Item icon="search" />
      </Toolbar.Group>

      <Toolbar.Group>
        <Toolbar.Item icon="map-marker" onClick={() => onClickDataLayers()} />
        <Toolbar.Item icon="map-o" onClick={() => onClickMapBackgrounds()} />
      </Toolbar.Group>
    </StyledToolbar>
  </WhiteTheme>;

LeftToolbar.propTypes = {
  zoom: PropTypes.number.isRequired,
  onClickIncreaseZoom: PropTypes.func.isRequired,
  onClickDecreaseZoom: PropTypes.func.isRequired,
  onClickDataLayers: PropTypes.func.isRequired,
  onClickMapBackgrounds: PropTypes.func.isRequired
};

LeftToolbar.defaultProps = {};

export default LeftToolbar;
