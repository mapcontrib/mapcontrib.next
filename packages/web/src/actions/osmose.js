export const OSMOSE_ADD_CATEGORIES = 'OSMOSE_ADD_CATEGORIES';
export const OSMOSE_ADD_SUBMITTED = 'OSMOSE_ADD_SUBMITTED';

export const addCategories = categories => ({
  type: OSMOSE_ADD_CATEGORIES,
  categories
});

export const addSubmitted = errorId => ({
  type: OSMOSE_ADD_SUBMITTED,
  errorId
});
