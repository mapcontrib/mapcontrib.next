import { connect } from 'react-redux';

import { increaseMapZoom, decreaseMapZoom } from 'actions/map';
import MainToolbar from 'components/MainToolbar';

const mapStateToProps = state => ({
  zoom: state.map.zoom
});

const mapDispatchToProps = dispatch => ({
  increaseZoom: zoom => dispatch(increaseMapZoom(zoom)),
  decreaseZoom: zoom => dispatch(decreaseMapZoom(zoom))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainToolbar);
