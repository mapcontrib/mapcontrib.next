import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decreaseMapZoom, increaseMapZoom } from 'actions/map';
import MainToolbar from 'components/MainToolbar';
import { IState as IMapState } from 'reducers/map';

interface IState {
  map: IMapState;
}

const mapStateToProps = (state: IState) => ({
  zoom: state.map.zoom,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decreaseZoom: () => dispatch(decreaseMapZoom()),
  increaseZoom: () => dispatch(increaseMapZoom()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainToolbar);
