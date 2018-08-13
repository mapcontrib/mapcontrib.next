import capitalize from 'lodash/capitalize';
import { Category } from 'osmose-request';

import { Action, Actions } from 'actions/osmose';

export interface IState {
  categories: Category[];
  submitted: string[];
}

export default function osmose(state: IState, action: Action) {
  switch (action.type) {
    case Actions.OSMOSE_ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categories.map(category => ({
          ...category,
          items: category.items.map(item => ({
            ...item,
            name: capitalize(item.name),
          })),
        })),
      };

    case Actions.OSMOSE_ADD_SUBMITTED:
      const newSubmittedSet = new Set(state.submitted);
      newSubmittedSet.add(action.errorId);

      const newSubmitted = Array.from(newSubmittedSet);

      window.localStorage.setItem(
        'osmoseSubmitted',
        JSON.stringify(newSubmitted)
      );

      return {
        ...state,
        submitted: newSubmitted,
      };

    default:
      return state;
  }
}
