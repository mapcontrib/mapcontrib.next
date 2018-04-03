import { connect } from 'react-redux';

import App from 'components/App';
import { setMapTileConfigId, setMapMinZoom, setMapMaxZoom } from 'actions/map'; // To remove
import { setFragment } from 'actions/theme';

const mapStateToProps = state => ({
  themeTitle: state.theme.title,
  themePath: state.theme.path
});

const mapDispatchToProps = dispatch => ({
  setMapTileConfigId: configId => dispatch(setMapTileConfigId(configId)), // To remove
  setMapMinZoom: zoom => dispatch(setMapMinZoom(zoom)), // To remove
  setMapMaxZoom: zoom => dispatch(setMapMaxZoom(zoom)), // To remove
  setFragment: fragment => dispatch(setFragment(fragment))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
