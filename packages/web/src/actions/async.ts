import { Category } from 'osmose-request';
import { Dispatch } from 'redux';

import { addCategories } from 'actions/osmose';
import { osmose } from 'helpers/requests';

export const fetchOsmoseCategories = () => {
  return (dispatch: Dispatch) =>
    osmose
      .fetchItemCategories()
      .then((categories: Category[]) => dispatch(addCategories(categories)));
};
