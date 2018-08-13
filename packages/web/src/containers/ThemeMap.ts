import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { setMapZoom } from 'actions/map';
import ThemeMap from 'components/ThemeMap';
import { findTileSourcesFromConfigId } from 'helpers/map';
import { IState as ILayersState } from 'reducers/layers';
import { IState as IMapState } from 'reducers/map';
import { IState as IOsmoseState } from 'reducers/osmose';
import { IState as ISourcesState } from 'reducers/sources';

interface IState {
  layers: ILayersState;
  map: IMapState;
  osmose: IOsmoseState;
  sources: ISourcesState;
}

const mapStateToProps = (
  state: IState,
  { match, history }: RouteComponentProps<any>
) => ({
  layers: Object.values(state.layers).filter(layer => layer.isVisible),
  maxZoom: state.map.maxZoom,
  minZoom: state.map.minZoom,
  openOsmose: (id: string) => history.push(`${match.url}/points/osmose/${id}`),
  sources: state.sources,
  submittedErrors: state.osmose.submitted,
  tileSources: findTileSourcesFromConfigId(state.map.tileConfigId),
  zoom: state.map.zoom,
});

const mapDispatchToProps = {
  setMapZoom,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeMap);
