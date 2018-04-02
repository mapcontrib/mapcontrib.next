const initialState = {
  categories: []
};

// TODO write test
function formatCategories(categories) {
  return categories.reduce(
    (acc, category) =>
      [
        {
          name: category.name,
          type: 'header'
        },
        ...category.items
      ].concat(acc),
    []
  );
}

const osmose = (state = initialState, action) => {
  switch (action.type) {
    case 'OSMOSE_ADD_CATEGORIES':
      return {
        ...state,
        categories: formatCategories(action.categories)
      };

    default:
      return state;
  }
};

export default osmose;
