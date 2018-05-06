import { connect } from 'react-redux';

import EditionSidebar from 'components/edition/EditionSidebar';

const mapStateToProps = ({ layers }) => ({
  layers: Object.values(layers)
});

export default connect(mapStateToProps)(EditionSidebar);
