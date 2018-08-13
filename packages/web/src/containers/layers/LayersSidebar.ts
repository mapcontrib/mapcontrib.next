import { connect } from 'react-redux';

import { addLayer } from 'actions/layers';
import LayersSidebar from 'components/layers/LayersSidebar';
import { IState as ILayersState } from 'reducers/layers';

interface IState {
  layers: ILayersState;
}

const mapStateToProps = ({ layers }: IState) => ({
  layers: Object.values(layers),
});

const mapDispatchToProps = {
  addLayer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayersSidebar);
