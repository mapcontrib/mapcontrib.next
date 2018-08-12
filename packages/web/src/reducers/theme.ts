import diacritic from 'diacritic';

import { Action, Actions } from 'actions/theme';
import { ITheme } from 'types';

export const initialState = {
  fragment: '',
  path: '',
  title: 'MapContrib',
};

const buildPath = (fragment: string, title: string) => {
  const cleanTitle = diacritic.clean(title);
  return `/t/${fragment}/${cleanTitle}`;
};

export default function theme(state: ITheme = initialState, action: Action) {
  switch (action.type) {
    case Actions.SET_FRAGMENT:
      return {
        ...state,
        fragment: action.fragment,
        path: buildPath(action.fragment, state.title),
      };
    case Actions.SET_TITLE:
      return {
        ...state,
        path: buildPath(state.fragment, action.title),
        title: action.title,
      };
    default:
      return state;
  }
}
