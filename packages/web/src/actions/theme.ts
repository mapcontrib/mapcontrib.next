export enum Actions {
  SET_FRAGMENT = 'SET_FRAGMENT',
  SET_TITLE = 'SET_TITLE',
}

export type Action =
  | {
      type: Actions.SET_FRAGMENT;
      fragment: string;
    }
  | {
      type: Actions.SET_TITLE;
      title: string;
    };

export const setFragment = (fragment: string): Action => ({
  fragment,
  type: Actions.SET_FRAGMENT,
});

export const setTitle = (title: string): Action => ({
  title,
  type: Actions.SET_TITLE,
});
