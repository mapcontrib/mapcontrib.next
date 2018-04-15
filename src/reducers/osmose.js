import capitalize from 'lodash/capitalize';
import { OSMOSE_ADD_CATEGORIES } from 'actions/osmose';

const initialState = {
  categories: []
};

export default function osmose(state = initialState, action = { type: null }) {
  switch (action.type) {
    case OSMOSE_ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categories.map(category => ({
          ...category,
          items: category.items.map(item => ({
            ...item,
            name: capitalize(item.name)
          }))
        }))
      };

    default:
      return state;
  }
}
