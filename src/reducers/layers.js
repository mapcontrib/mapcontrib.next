const layers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LAYER':
      const index = action.index || state.length;

      return [
        ...state.slice(0, index),
        action.layer,
        ...state.slice(index, state.length)
      ];
    case 'REMOVE_LAYER':
      return state.filter(layer => layer.id !== action.layer.id);
    default:
      return state;
  }
};

export default layers;
