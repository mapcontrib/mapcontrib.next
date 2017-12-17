import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map as OSMUIMap } from 'osm-ui-react';

const StyledMap = styled(OSMUIMap)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Map = ({ children, ...props }) => (
  <StyledMap zoomControl={false} attributionControl={false} {...props}>
    <OSMUIMap.AttributionControl position="bottomleft" />
    <OSMUIMap.ScaleControl position="bottomleft" />
    {children}
  </StyledMap>
);

Map.propTypes = {
  children: PropTypes.node
};

Map.defaultProps = {
  children: ''
};

export default Map;
