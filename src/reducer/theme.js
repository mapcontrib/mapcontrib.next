
const defaultState = {
    fragment: null,
};

const theme = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FRAGMENT':
            return {
                ...state,
                fragment: action.fragment,
            };
        default:
            return state;
    }
};

export default theme;
