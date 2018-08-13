import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setMapMaxZoom, setMapMinZoom, setMapTileConfigId } from 'actions/map'; // FIXME - To remove
import { setFragment } from 'actions/theme';
import App from 'components/App';
import { ITheme } from 'types';

interface IState {
  theme: ITheme;
}

const mapStateToProps = (state: IState) => ({
  themePath: state.theme.path,
  themeTitle: state.theme.title,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFragment: (fragment: string) => dispatch(setFragment(fragment)),
  setMapMaxZoom: (zoom: number) => dispatch(setMapMaxZoom(zoom)), // FIXME - To remove
  setMapMinZoom: (zoom: number) => dispatch(setMapMinZoom(zoom)), // FIXME - To remove
  setMapTileConfigId: (configId: string) =>
    dispatch(setMapTileConfigId(configId)), // FIXME - To remove
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
