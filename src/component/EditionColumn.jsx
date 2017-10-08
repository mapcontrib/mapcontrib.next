import React from 'react';
import { Link } from 'react-router-dom';
import { RedTheme, Column } from 'osm-ui-react';

const EditColumn = props =>
  <RedTheme>
    <Column opened position="right" title="Edition" {...props}>
      <Column.Nav>
        <ul>
          <li>
            <Link to="">Add a missing point</Link>
          </li>
          <li>
            <Link to="">Add a temporary data layer</Link>
          </li>
        </ul>
      </Column.Nav>
    </Column>
  </RedTheme>;

EditColumn.propTypes = {};

EditColumn.defaultProps = {};

export default EditColumn;
