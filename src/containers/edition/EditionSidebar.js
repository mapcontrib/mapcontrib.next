import { connect } from 'react-redux';
import { addLayer } from 'actions/layers';

import EditionSidebar from 'components/edition/EditionSidebar';

const mapStateToProps = ({ layers }) => ({
  layers: Object.values(layers)
});

const mapDispatchToProps = {
  addLayer
};

export default connect(mapStateToProps, mapDispatchToProps)(EditionSidebar);
