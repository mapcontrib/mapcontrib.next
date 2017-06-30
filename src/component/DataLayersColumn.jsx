import React from 'react';
import { WhiteTheme, Column } from 'osm-ui-react';

const DataLayersColumn = props =>
  <WhiteTheme>
    <Column opened title="Data layers" {...props} />
  </WhiteTheme>;

DataLayersColumn.propTypes = {};

DataLayersColumn.defaultProps = {};

export default DataLayersColumn;
