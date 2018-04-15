export const SET_FRAGMENT = 'SET_FRAGMENT';
export const SET_TITLE = 'SET_TITLE';

export const setFragment = fragment => ({
  type: SET_FRAGMENT,
  fragment
});

export const setTitle = title => ({
  type: SET_TITLE,
  title
});
