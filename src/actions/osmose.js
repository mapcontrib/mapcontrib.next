export const addItem = item => ({
  type: 'OSMOSE_ADD_ITEM',
  item
});

export const removeItem = item => ({
  type: 'OSMOSE_REMOVE_ITEM',
  item
});

export const addCategories = categories => ({
  type: 'OSMOSE_ADD_CATEGORIES',
  categories
});
