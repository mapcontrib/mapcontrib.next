import React from 'react';
import styled from 'styled-components';
import { Map as LeafletMap } from 'osm-ui-react';

const StyledMap = styled(LeafletMap)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Map = props => <StyledMap zoomControl={false} {...props} />;

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
