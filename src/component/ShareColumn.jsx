import React from 'react';
import { GreenTheme, Column } from 'osm-ui-react';

const ShareColumn = props => (
  <GreenTheme>
    <Column opened position="right" title="Share" {...props}>
      <p>Lorem ipsum...</p>
    </Column>
  </GreenTheme>
);

ShareColumn.propTypes = {};

ShareColumn.defaultProps = {};

export default ShareColumn;
