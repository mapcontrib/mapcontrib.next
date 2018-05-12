import diacritic from 'diacritic';
import { SET_FRAGMENT, SET_TITLE } from 'actions/theme';

const defaultState = {
  fragment: '',
  title: 'MapContrib',
  path: ''
};

const buildPath = (fragment, title) => {
  const cleanTitle = diacritic.clean(title);
  return `/t/${fragment}/${cleanTitle}`;
};

export default function theme(state = defaultState, action = { type: null }) {
  switch (action.type) {
    case SET_FRAGMENT:
      return {
        ...state,
        fragment: action.fragment,
        path: buildPath(action.fragment, state.title)
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
        path: buildPath(state.fragment, action.title)
      };
    default:
      return state;
  }
}
