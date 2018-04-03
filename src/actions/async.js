import { osmose } from 'helpers/requests';
import { addCategories } from 'actions/osmose';

export const fetchOsmoseCategories = () => {
  return dispatch =>
    osmose
      .fetchItemCategories()
      .then(categories => dispatch(addCategories(categories)));
};
