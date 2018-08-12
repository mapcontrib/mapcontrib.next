import { Category } from 'osmose-request';

export enum Actions {
  OSMOSE_ADD_CATEGORIES = 'OSMOSE_ADD_CATEGORIES',
  OSMOSE_ADD_SUBMITTED = 'OSMOSE_ADD_SUBMITTED',
}

export type Action =
  | {
      categories: Category[];
      type: Actions.OSMOSE_ADD_CATEGORIES;
    }
  | {
      errorId: string;
      type: Actions.OSMOSE_ADD_SUBMITTED;
    };

export const addCategories = (categories: Category[]): Action => ({
  categories,
  type: Actions.OSMOSE_ADD_CATEGORIES,
});

export const addSubmitted = (errorId: string): Action => ({
  errorId,
  type: Actions.OSMOSE_ADD_SUBMITTED,
});
