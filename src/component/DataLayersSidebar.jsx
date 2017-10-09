import React from 'react';
import { WhiteTheme, Sidebar } from 'osm-ui-react';

const DataLayersSidebar = props => (
  <WhiteTheme>
    <Sidebar opened title="Data layers" {...props} />
  </WhiteTheme>
);

DataLayersSidebar.propTypes = {};

DataLayersSidebar.defaultProps = {};

export default DataLayersSidebar;
