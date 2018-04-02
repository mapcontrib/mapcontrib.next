import { connect } from 'react-redux';
import Osmose from 'components/OsmoseSidebar';

const mapStateToProps = (state, ownProps) => ({
  themePath: state.theme.path,
  id: ownProps.match.params.id
});

export default connect(mapStateToProps)(Osmose);
