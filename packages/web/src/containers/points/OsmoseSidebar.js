import { connect } from 'react-redux';
import { addSubmitted } from 'actions/osmose';
import OsmoseSidebar from 'components/points/OsmoseSidebar';

const mapDispatchToProps = {
  addSubmitted
};

export default connect(
  null,
  mapDispatchToProps
)(OsmoseSidebar);
