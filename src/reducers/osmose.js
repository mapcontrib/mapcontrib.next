import capitalize from 'lodash/capitalize';
import { OSMOSE_ADD_CATEGORIES, OSMOSE_ADD_SUBMITTED } from 'actions/osmose';

const initialState = {
  categories: [],
  submitted: []
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

    case OSMOSE_ADD_SUBMITTED:
      var newSubmitted = new Set(state.submitted);
      newSubmitted.add(action.errorId);

      newSubmitted = Array.from(newSubmitted);

      window.localStorage.setItem(
        'osmoseSubmitted',
        JSON.stringify(newSubmitted)
      );

      return {
        ...state,
        submitted: newSubmitted
      };

    default:
      return state;
  }
}
