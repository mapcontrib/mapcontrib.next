import React from 'react';
import { WhiteTheme, Column } from 'osm-ui-react';

const MapBackgroundColumn = props => (
  <WhiteTheme>
    <Column opened title="Map backgrounds" {...props} />
  </WhiteTheme>
);

MapBackgroundColumn.propTypes = {};

MapBackgroundColumn.defaultProps = {};

export default MapBackgroundColumn;
